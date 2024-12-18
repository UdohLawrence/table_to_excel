# Chrome Extension for Extracting HTML Tables to XLSX

This Chrome extension allows users to extract HTML tables from web pages and save them in the XLSX format. Built using Vite, React, and TypeScript, it provides a seamless and efficient way to convert and download HTML table data.

## Features

- Extract HTML tables from any web page.
- Save extracted tables in XLSX format.
- Easy-to-use interface.
- Lightweight and fast.

## Installation

To install the extension locally:

1. Clone this repository:
    ```bash
    git clone https://github.com/UdohLawrence/table_to_excel.git
    ```
2. Navigate to the project directory:
    ```bash
    cd table_to_excel
    ```
3. Install the dependencies:
    ```bash
    pnpm install
    ```
4. Build the project:
    ```bash
    pnpm build
    ```
5. Open Chrome and go to `chrome://extensions/`.
6. Enable "Developer mode" (top right corner).
7. Click "Load unpacked" and select the `dist` directory.

## Usage

1. Navigate to a web page containing the HTML table you want to extract.
2. Click on the extension icon in the Chrome toolbar.
3. Follow the prompts to select the table and save it in XLSX format.

## Development

To run the extension in development mode:

1. Start the development server:
    ```bash
    pnpm dev
    ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right corner).
4. Click "Load unpacked" and select the `dist` directory.

## Technologies Used

- **Vite:** For fast and optimized bundling.
- **React:** For building the user interface.
- **TypeScript:** For type-safe development.
- **xlsx:** For generating XLSX files from HTML tables.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please contact UdohLawrence at lawrenceaudoh@gmail.com.
