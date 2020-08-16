import axios from 'axios'


export default new class TABCOLService{

    add(credentials){
        console.log(credentials)
        axios.post('tab-col/save',credentials).then(response => {
            console.log(response)
        })
        console.log(credentials)
    }
    async delete(id){
        await axios.delete('tab-col/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,credentials){
        await axios.put('tab-col/update/'+id,credentials).then(response => {
            console.log(response)
        })
    }
    
    async getAll(){
        let credentials = [];
        credentials = await axios.get('tab-col/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return credentials
    }
}