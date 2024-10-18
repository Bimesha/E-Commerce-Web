const salesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Chair',
        backgroundColor: '#FDCB58',
        borderColor: '#FDCB58', 
        // borderWidth: 1,
        data: [150, 200, 100, 180] 
    },
    {
      label: 'Table',
      backgroundColor: '#000000', // Black for Table
      borderColor: '#000000',
      
      data: [180, 220, 150, 160] // Sales data for Table
  },
  {
      label: 'Sofa',
      backgroundColor: '#C4C4C4', // Gray for Sofa
      borderColor: '#C4C4C4',
      
      data: [120, 180, 130, 140] // Sales data for Sofa
  }
  ]
  };
  
  // Chart.js initialization
  const ctx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(ctx, {
    type: 'bar',
    data: salesData,
    options: {
      plugins:{
         
          legend:{
              labels:{
                  usePointStyle: true,
                  pointStyle: 'circle',
                  font: {
                      size: 12
                    },
  
              },
  
          },
      },
        scales: {
          x: {
              categoryPercentage: 0.9,
              barPercentage: 0.9,
              grid: {
                  display: false
          
              }
  
            },
            y: { 
                ticks: {
                    beginAtZero: true,
                    max: 300,
                    min: 100,
                    stepSize: 100
                },
                
            }
            
        }
    }
  });