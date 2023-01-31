import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Stack, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data, setData }) => {
    const { loanAmount, interest, homeValue, loanTerm } = data;
    const totalLoanMonth = loanTerm * 12;
    const interestPerMonth = interest / 100 / 12;
    const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonth) / ((1 + interestPerMonth) ** totalLoanMonth - 1);
    const totalInterestGenerated = monthlyPayment * totalLoanMonth - loanAmount;

    const pieChartData = {
        labels: ['Principle', 'Interest'],
        datasets: [
            {
                label: 'Ratio of Principle and Interest',
                data: [homeValue, totalInterestGenerated],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Stack gap={3}>
            <Typography variant="h5" textAlign="center">
                Monthly Payment: $ {monthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent='center'>
                <div>
                    <Pie data={pieChartData} />
                </div>
            </Stack>

        </Stack>

    );
};

export default Result;