Here's a  file that includes both the instructions on using the application and the setup guide for running the Node.js server with an SQL database.

[Live Demo](https://visitingcardgenerator.netlify.app/)


# Template Creator

An application that allows users to create custom templates, customize according to their needs, download creations, and save them for later access in their profile. This application uses an SQL database to store the Firebase URL for saved templates, which can be accessed later in the user profile.

## Features

1. **Choose Your Templates**: Select from a variety of templates to get started.
2. **Customize According to Your Needs**: Modify template elements to suit your requirements.
3. **Download Your Creation**: Once satisfied, download your customized template.
4. **Save and Access Later in Profile**: Save your creation, and access it anytime in your profile.

## How It Works

1. **Choose Your Template**: Start by selecting a template that matches your needs.
2. **Customize the Template**: Modify text, colors, fonts, and other elements to create a personalized design.
3. **Download Your Creation**: Click the download button to save the final version to your device.
4. **Save and Access Later**: Save the template URL in SQL (via Firebase) for later use. Access saved designs through your profile.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or above)
- SQL database (e.g., MySQL, PostgreSQL)

### Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone  https://github.com/SHETYGURU/VisitingCard_Geneartor_FireBase-Sql.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd  https://github.com/SHETYGURU/VisitingCard_Geneartor_FireBase-Sql.git
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up SQL Database**

   - Create an SQL database (e.g., MySQL, PostgreSQL) for the application.
   - Run any SQL scripts provided with the project (e.g., `schema.sql`) to set up the database tables.

5. **Configure Database Connection**

   - In the project directory, locate the configuration file (e.g., `.env` or `config.js`) where database settings are stored.
   - Add your SQL database connection details, such as `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.

   Example for `.env` file:

   ```env
   DB_HOST=localhost
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   DB_PORT=3306
   ```

6. **Configure Firebase (If Applicable)**

   - Set up Firebase in your Firebase Console and get your project configuration.
   - Update Firebase configuration in your app (usually in a `firebaseConfig.js` file).

7. **Run Database Migration (If Applicable)**

   Some projects require database migrations to create tables or set up initial data. Run the following command if your project uses migrations (e.g., with Sequelize):

   ```bash
   npx sequelize db:migrate
   ```

8. **Start the Node.js Server**

   Run the application server:

   ```bash
   npm start
   ```

   This command starts the server and connects it to the SQL database. If everything is configured correctly, you should see a message indicating that the server is running and connected to the database.

9. **Access the Application**

   Open a browser and go to:

   ```
   http://localhost:3000
   ```

   This URL should display the application interface, allowing you to interact with it and utilize SQL storage.

### Database Management

- **Accessing the Database**: Use an SQL client (e.g., MySQL Workbench, pgAdmin) to connect to your database, manage tables, and view data.
- **Environment Variables**: For security, keep sensitive database credentials in an `.env` file and ensure it’s listed in `.gitignore` to prevent it from being pushed to version control.

### Troubleshooting

- **Database Connection Issues**: Verify that your SQL server is running and the credentials in `.env` are correct.
- **Dependency Errors**: Make sure all dependencies are installed with `npm install`.
- **Environment Variables**: Check that `.env` values are correctly loaded, and use `console.log(process.env.VARIABLE_NAME)` to debug.


