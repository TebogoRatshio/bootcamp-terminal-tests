export default function countAllPaarl(regNumbers) {
    return regNumbers.split(',').map(regNumber => regNumber.trim()).filter(regNumber => regNumber.startsWith('CJ'));
}