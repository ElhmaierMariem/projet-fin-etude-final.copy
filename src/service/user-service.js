import axios from 'axios'


export default new class USERService{

    add(credentials){
        axios.post('user/save',credentials).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('user/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,credentials){
        await axios.put('user/update/'+id,credentials).then(response => {
            console.log(response)
        })
    }
    get(credentials){
        axios.post('user/delete',credentials).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let credentials = [];
        credentials = await axios.get('user/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return credentials
    }
}