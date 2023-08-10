document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.getElementById("inputFile");
    const outputFormat = document.getElementById("outputFormat");
    const convertBtn = document.getElementById("convertBtn");
    const message = document.getElementById("message");
    const downloadLink = document.getElementById("downloadLink");

    convertBtn.addEventListener("click", async () => {
        if (inputFile.files.length === 0) {
            message.textContent = "Please select a file to convert.";
            return;
        }

        const selectedFormat = outputFormat.value;
        const file = inputFile.files[0];
        
        try {
            // Simulate file conversion process (replace with actual conversion logic)
            message.textContent = `Converting ${file.name} to ${selectedFormat}...`;
            const convertedBlob = await simulateConversion(file, selectedFormat);
            message.textContent = `Conversion complete: ${file.name} converted to ${selectedFormat}.`;
            
            // Create a download link for the converted file
            const downloadUrl = URL.createObjectURL(convertedBlob);
            downloadLink.href = downloadUrl;
            downloadLink.download = `converted.${selectedFormat}`;
            downloadLink.style.display = "block";
        } catch (error) {
            message.textContent = `Error during conversion: ${error.message}`;
        }
    });

    function simulateConversion(file, format) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success after 2 seconds (replace with actual conversion logic)
                const dummyData = `This is a dummy ${format} file content.`;
                const convertedBlob = new Blob([dummyData], { type: `application/${format}` });
                resolve(convertedBlob);
            }, 2000);
        });
    }
});
