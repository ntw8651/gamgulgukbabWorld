
const ctx = document.getElementById('one').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['1족', '2족', '13족', '14족', '15족', '16족', '17족'],
        datasets: [{
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            label: '2주기 원소',
            data: [128, 96, 84, 76, 71, 66, 57],
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            pointRadius: 10
        },

            {
            label: '3주기 원소',
            data: [166, 141, 121, 111, 107, 105, 102],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            pointRadius: 10
        }]
        
    },
    options: {
        title: {
            display: true,
            text: 'Chart Subtitle'
            
        },
        scales: {
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: '원자 반지름(pm)'
                }
            }
        }
        
        
        
        
    }
});


const ctx1 = document.getElementById('uesableAtom').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'line',
    plugins:[ChartDataLabels],
    data: {
        labels: ['1족', '2족', '13족', '14족', '15족', '16족', '17족', '18족'],
        datasets: [{
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            label: '1주기 원소',
            data: [1.000, null, null,null,null,null,null, 1.688],
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            pointRadius: 10
        },
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            label: '2주기 원소',
            data: [1.297, 1.912, 2.421, 3.136, 3.834, 4.453, 5.100, 5.758],
            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            pointRadius: 10
        },

            {
            label: '3주기 원소',
            data: [2.507, 3.308, 4.066, 4.285, 4.886, 5.482, 6.116, 6.764],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4,
            pointRadius: 10
        }]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: true,//밥
                title: {
                    display: true,
                    text: '유효핵전하'
                }
            },
            x: {

                display: true,
                title: {
                    display: true,
                    text: ''
                }
            }
        }
    }
});

const ctx2 = document.getElementById('ion').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'line',
    
    data: {
        labels: [...Array(22)].map((v,i) => i),
        datasets: [
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            
            label: '이온화 에너지 변화 추세',
            data: [{
                x:1,
                y:1312.0,
                name: 'asdf'
            },
            {
                x:2,
                y:2372.3
            },
            {
                x:3,
                y:520.2,
            },
            {
                x:4,
                y:899.5,
            },
            {
                x:5,
                y:800.6,
            },
            {
                x:6,
                y:1086.5,
            },
            {
                x:7,
                y:1402.3,
            },
            {
                x:8,
                y:1313.9,
            },
            {
                x:9,
                y:1681.0,
            },
            {
                x:10,
                y:2080.7,
            },
            {
                x:11,
                y:495.8,
            },
            {
                x:12,
                y:737.7,
            },
            {
                x:13,
                y:577.5,
            },
            {
                x:14,
                y:786.5,
            },
            {
                x:15,
                y:1011.8,
            },
            {
                x:16,
                y:999.6,
            },
            {
                x:17,
                y:1251.2,
            },
            {
                x:18,
                y:1520.6,
            },
            {
                x:19,
                y:418.8,
            },
            {
                x:20,
                y:589.8,
            }
        ],

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4},
        ]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: '이온화 에너지(kJ/mol)'
                }
            },
            x: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: '원자번호'
                }
            }
        }
    }
});

const ctx3 = document.getElementById('ionradius').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    
    data: {
        labels: [...Array(22)].map((v,i) => i),
        datasets: [
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            
            label: '1주기 He의 전자배치',
            data: [{
                x:1,
                y:139.9,
            },
            {
                x:3,
                y:76
            },
            {
                x:4,
                y:45,
            },
            {
                x:5,
                y:27,
            },
            {
                x:6,
                y:16,
            },
            {
                x:7,
                y:13,
            },
        ],

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4},
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            
            label: '2주기 Ne의 전자배치',
            data: [{
                x:7,
                y:146,
            },
            {
                x:8,
                y:140
            },
            {
                x:9,
                y:133,
            },
            {
                x:11,
                y:102,
            },
            {
                x:12,
                y:72,
            },
            {
                x:13,
                y:53.5,
            },
            {
                x:14,
                y:40,
            },
            {
                x:15,
                y:38,
            },
            {
                x:16,
                y:29,
            },
            {
                x:17,
                y:27,
            },
        ],

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4},
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            
            label: '3주기 Ar의 전자배치',
            data: [{
                x:15,
                y:212,
            },
            {
                x:16,
                y:184
            },
            {
                x:17,
                y:181,
            },
            {
                x:19,
                y:138,
            },
            {
                x:20,
                y:100,
            }
        ],

            
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4},
            {
            datalabels: {
                labels: {
                    title:{
                        font:{
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            },
            
            label: '기본 반지름',
            data: [{
                x:1,
                y:31,
            },
            {
                x:3,
                y:128
            },
            {
                x:4,
                y:96,
            },
            {
                x:5,
                y:84,
            },
            {
                x:6,
                y:76,
            },
            {
                x:7,
                y:71,
            },
            {
                x:8,
                y:66,
            },
            {
                x:9,
                y:57,
            },
            {
                x:11,
                y:166,
            },
            {
                x:12,
                y:141,
            },
            {
                x:13,
                y:121,
            },
            {
                x:14,
                y:111,
            },
            {
                x:15,
                y:107,
            },
            {
                x:16,
                y:105,
            },
            {
                x:17,
                y:102,
            },
            {
                x:19,
                y:203,
            },
            {
                x:20,
                y:176,
            },
        ],

            
            backgroundColor: [
                'rgba(0,0,0, 0.2)',

            ],
            borderColor: [
                'rgba(0,0,0, 0.5)',

            ],
            borderWidth: 4},
            
        ]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: '반지름(pm)'
                }
            },
            x: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    text: '원자번호'
                }
            }
        }
    }
});
