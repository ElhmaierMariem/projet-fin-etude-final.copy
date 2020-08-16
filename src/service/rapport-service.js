import axios from 'axios'


export default new class RAPPService{

    add(credentials){
        console.log(credentials)
        axios.post('rapp/save',credentials).then(response => {
            console.log(response)
        })
        console.log(credentials)
    }
    async delete(id){
        await axios.delete('rapp/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,credentials){
        await axios.put('rapp/update/'+id,credentials).then(response => {
            console.log(response)
        })
    }
    
    async getAll(){
        let credentials = [];
        credentials = await axios.get('rapp/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return credentials
    }
}