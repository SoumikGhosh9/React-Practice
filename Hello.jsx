function Hello(){
    let myName = 'Soumik';
    let fullName = () => {
        return 'Soumik Ghosh';
    }
    return <h1> 
        'Hello, I am {fullName()}';
    </h1>
}
export default Hello