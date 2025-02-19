const ctx = document.getElementById('chartId').getContext('2d'); // Get the canvas context

const data = {
    labels: ['January', 'February', 'March', 'April'], // X-axis labels (e.g., months)
    datasets: [{
        label: 'Stock Prices',
        data: [100, 120, 140, 130], // Data for the stock prices
        borderColor: 'rgba(75, 192, 192, 1)', // Color of the line
        borderWidth: 1, // Thickness of the line
        fill: false, // Don't fill the area under the line
    }]
};

const options = {
    responsive: true, // Make the chart responsive to screen size
    scales: {
        x: {
            beginAtZero: true, // Start x-axis from zero
        },
        y: {
            beginAtZero: true, // Start y-axis from zero
        }
    }
};

const chart = new Chart(ctx, {
    type: 'line', // Set chart type to line
    data: data, // Use the data defined earlier
    options: options // Use the customization options defined earlier
});
