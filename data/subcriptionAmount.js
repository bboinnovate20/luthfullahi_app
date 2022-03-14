

const generalPlan  = [
    {
        id: 1,
        plan: 'Weekly'
    },
    {
        id: 2,
        plan: 'Monthly'
    }
]

const otherPlan = [
    {
        id: 4,
        plan: 'Quarterly',
    },
    {
        id: 5,
        plan: 'Yearly'
    }
]

export const amount = [
    {
        id: 1,
        amount: '500',
        plan: [
            ...generalPlan
        ]
    },
    {
        id: 2,
        amount: '1000',
        plan: [
            ...generalPlan
        ]
    },
    {
        id: 3,
        amount: '2000',
        plan: [
            ...generalPlan,

        ]
    },
    {
        id: 4,
        amount: '5000',
        plan: [
            ...generalPlan,
            ...otherPlan
        ]
    },
    {
        id: 5,
        amount: '10000',
        plan: [
            ...generalPlan,
           ...otherPlan

        ]
    },
    {
        id: 6,
        amount: '20000',
        plan: [
            ...generalPlan,
            ...otherPlan
        ]
    },
    {
        id: 7,
        amount: '50000',
        plan: [
            ...generalPlan,
            ...otherPlan

        ]
    },
    {
        id: 8,
        amount: '100000',
        plan: [
            ...generalPlan,
            ...otherPlan
        ]
    },
    {
        id: 9,
        amount: '200000',
        plan: [
            ...generalPlan,
            ...otherPlan

        ]
    },
    {
        id: 10,
        amount: '500000',
        plan: [
            ...generalPlan,
            ...otherPlan

        ]
    },
    {
        id: 11,
        amount: '1000000',
        plan: [
            ...generalPlan,
            ...otherPlan

        ]
    },

]