README.md

# N-Tech Help Portal

N-Tech Help Portal is a React application designed to assist Netflix employees with IT helpdesk requests. Users can select from a variety of common issues and submit their requests, which are then sent to a specified Google Forms URL.

## Features

- **Select Helpdesk Requests:** Users can choose from a range of common IT issues.
- **Submit Requests:** Requests are sent to a Google Forms URL for processing.
- **Responsive Design:** The app is designed to work across different devices.
- **Animations:** Includes animations for better user experience.
- **Background Image:** Uses a custom background image.

## Project Structure
n-tech-help-portal ├── public │ ├── background.jpg │ ├── ntechbot.png │ └── index.html ├── src │ ├── components │ │ └── Button.js │ ├── App.js │ ├── App.css │ ├── index.js │ └── script.js ├── .env ├── package.json └── README.md


## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (version 6.0.0 or higher)
- [Git](https://git-scm.com/)

## Getting Started

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/n-tech-help-portal.git
    cd n-tech-help-portal
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm start
    ```

4. **Open the application in your browser:**

    Navigate to `http://localhost:3000` to view the application.

## Configuration

### Environment Variables

Create a `.env` file in the root directory to configure environment variables. For example:
REACT_APP_GOOGLE_FORM_URL=https://docs.google.com/forms/d/1908DhS9F-bfp6D_GgyPAwaknZLMo1Nz80UKDMGw3-Ng/formResponse

Copy code


### Backend Server (Optional)

If you have a backend server, make sure it is running. Here is an example of how to set up a simple Express server to handle form submissions:

```js
const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/submit_ticket', (req, res) => {
  const { email, subject, description } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'askntech@netflix.com',
    subject: subject,
    text: description,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to submit the ticket. Please try again.');
    } else {
      res.status(200).send('Ticket submitted successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgements
React
Nodemailer
Google Forms
VS Code
GitHub
