export default function countAllFromTown(regNumbers, townPrefix) {
    return regNumbers.split(',').map(regNumber => regNumber.trim()).filter(regNumber => regNumber.startsWith(townPrefix));
}