# Fast API Setup

This is a Python project for creating a simple registration functionality

## Setup

### Creating and Activating a Virtual Environment

1. Create a virtual environment named `venv` using Python 3:

   ```
   python3 -m venv venv
   ```

2. Activate the virtual environment:

   ```
   source venv/bin/activate
   ```

### Installing Dependencies

1. To install the project dependencies, run:

   ```
   pip install -r requirements.txt
   ```

### Creating and Adding a .env File

1. Create a `.env` file in the root directory of your project.

2. Add your environment variables to the `.env` file in the format `KEY=VALUE`. For example:

   ```
   MONGO_URI=
   ```

### Running the Application

To run the application, use the following command:

    uvicorn index:app --reload

This command starts the Uvicorn server and reloads the application automatically when changes are made.

## License

This project is licensed under the [MIT License](LICENSE).
