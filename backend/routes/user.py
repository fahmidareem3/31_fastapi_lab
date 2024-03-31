from fastapi import APIRouter, HTTPException
from pymongo.errors import DuplicateKeyError
from passlib.context import CryptContext
from config.db import MONGODB_URI, conn  # Assuming these are imported correctly
from models.user import User  # Your Pydantic model for users
from schemas.user import userEntity  # Function to convert user document to dict
from schemas.user import usersEntity
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

user_router = APIRouter()

def hash_password(password: str):
    return pwd_context.hash(password)
@user_router.post('/', response_model=dict)
async def create_user(user_data: User):
    db_name = MONGODB_URI.rsplit('/', 1)[-1].split('?')[0]
    db = conn[db_name]
    
    # Hash the user's password before storing it in the database
    hashed_password = hash_password(user_data.password)
    user_dict = user_data.dict()
    user_dict["password"] = hashed_password  # Replace plaintext password with hashed one

    try:
        result = db.user.insert_one(user_dict)
    except DuplicateKeyError as e:
        # Parse the error message to determine which field caused the duplicate key error
        error_field = str(e).split("index: ")[1].split("_")[0]
        if "username" in error_field:
            detail_message = "Username is already taken"
        elif "email" in error_field:
            detail_message = "Email is already registered"
        elif "phoneNumber" in error_field:
            detail_message = "Phone number is already in use"
        else:
            detail_message = "Duplicate entry"
        raise HTTPException(status_code=400, detail=detail_message)

    new_user = db.user.find_one({"_id": result.inserted_id})
    return userEntity(new_user)

@user_router.get('/')
async def find_all_users():
    
    db_name = MONGODB_URI.rsplit('/', 1)[-1].split('?')[0]
    db = conn[db_name]
    return usersEntity(db.user.find())


