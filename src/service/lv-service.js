import axios from 'axios'


export default new class LVService{

    add(credentials){
        console.log(credentials)
        axios.post('lv/save',credentials).then(response => {
            console.log(response)
        })
        console.log(credentials)
    }
    async delete(id){
        await axios.delete('lv/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,credentials){
        await axios.put('lv/update/'+id,credentials).then(response => {
            console.log(response)
        })
    }
    
    async getAll(){
        let credentials = [];
        credentials = await axios.get('lv/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return credentials
    }
}