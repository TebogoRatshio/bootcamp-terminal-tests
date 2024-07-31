export default function mostProfitableDepartment(salesData) {
    
    let departmentSales = {};

    
    for (let sale of salesData) {
        if (departmentSales[sale.department]) {
            
            departmentSales[sale.department] += sale.sales;
        } else {
            
            departmentSales[sale.department] = sale.sales;
        }
    }
    let mostProfitable = '';
    let maxSales = 0;

    for (let department in departmentSales) {
        if (departmentSales[department] > maxSales) {
            mostProfitable = department;
            maxSales = departmentSales[department];
        }
    }

    return mostProfitable;
}


function mostProfitableDay(salesData) {
    const daySales = {};
    for (const sale of salesData) {
        if (daySales[sale.day] === undefined) {
            daySales[sale.day] = 0;
        }
        daySales[sale.day] += sale.sales;
    }

    let maxSales = 0;
    let profitableDay = '';
    for (const day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            profitableDay = day;
        }
    }

    return profitableDay;
}



