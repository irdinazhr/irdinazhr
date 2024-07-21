class LoadingBar {
    constructor(options) {
        this.domElement = document.createElement("div");
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '0';
        this.domElement.style.left = '0';
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.background = '#8B4513'; // Brown background color
        this.domElement.style.opacity = '0.8';
        this.domElement.style.display = 'flex';
        this.domElement.style.flexDirection = 'column';
        this.domElement.style.alignItems = 'center';
        this.domElement.style.justifyContent = 'center';
        this.domElement.style.zIndex = '1111';

        const message = document.createElement("div");
        message.style.color = '#FFF';
        message.style.fontSize = '24px';
        message.style.marginBottom = '20px';
        message.textContent = 'LOADING YOUR EXPERIENCE';
        this.domElement.appendChild(message);

        const spinner = document.createElement("div");
        spinner.className = 'spinner';
        spinner.style.border = '16px solid #f3f3f3'; 
        spinner.style.borderRadius = '50%';
        spinner.style.borderTop = '16px solid #3498db';
        spinner.style.width = '60px';
        spinner.style.height = '60px';
        spinner.style.animation = 'spin 2s linear infinite';
        this.domElement.appendChild(spinner);

        const barBase = document.createElement("div");
        barBase.style.background = '#555';
        barBase.style.width = '50%';
        barBase.style.minWidth = '250px';
        barBase.style.borderRadius = '10px';
        barBase.style.height = '15px';
        barBase.style.marginTop = '20px';
        this.domElement.appendChild(barBase);

        const bar = document.createElement("div");
        bar.style.background = '#FFA500'; // Orange bar color
        bar.style.borderRadius = '10px';
        bar.style.height = '100%';
        bar.style.width = '0';
        barBase.appendChild(bar);
        this.progressBar = bar;

        document.body.appendChild(this.domElement);

        function onprogress(delta) {
            const progress = delta * 100;
            loader.progressBar.style.width = `${progress}%`;
        }
    }

    set progress(delta) {
        const percent = delta * 100;
        this.progressBar.style.width = `${percent}%`;
    }

    set visible(value) {
        if (value) {
            this.domElement.style.display = 'flex';
        } else {
            this.domElement.style.display = 'none';
        }
    }
}

export { LoadingBar };

// Add this CSS to your project for the spinner animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
