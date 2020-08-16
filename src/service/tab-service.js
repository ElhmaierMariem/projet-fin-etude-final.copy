import axios from 'axios'


export default new class TABSrevice{

    add(TAB){
        axios.post('tab/save',TAB).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('tab/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,TAB){
        await axios.put('tab/update/'+id,TAB).then(response => {
            console.log(response)
        })
    }
    get(TAB){
        axios.post('tab/delete',TAB).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let rds = [];
        rds = await axios.get('tab/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}