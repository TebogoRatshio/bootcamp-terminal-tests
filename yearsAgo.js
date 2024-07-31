export default function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    
    return currentYear - year;
}