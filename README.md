


https://github.com/user-attachments/assets/68610efc-30d8-4f28-8d86-25b86dd9f703

LinkedIn Auto-Reply Chrome Extension

Objective-
The LinkedIn Auto-Reply Chrome Extension is designed to enhance user productivity by automating responses to LinkedIn messages. The extension integrates seamlessly with LinkedIn’s messaging interface and offers a modal for users to customize their prompts before generating replies.

Features-

- Detects and targets LinkedIn message input fields.
- Displays an editable modal for users to input custom prompts.
- Automatically generates a default reply to LinkedIn messages.
- Allows users to insert generated replies directly into the LinkedIn message input box.
- Closes the modal when the user clicks outside of it.

Tech Stack-

- React: For building the UI components.
- TypeScript: For type safety and better code management.
- Tailwind CSS: For easy and efficient styling.
- WXT: A framework to streamline the development of Chrome extensions.
- Webpack: For bundling the assets and scripts.

Install Dependencies:

In the project root directory, install the necessary dependencies:

npm install

Key Files

- `content.ts`: The content script that runs on LinkedIn, injecting the modal and handling interactions with the page.
- `popup/app.tsx`: The main React app file that runs the popup interface.
- `tailwind.config.js`: Configuration for Tailwind CSS.
