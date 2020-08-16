import axios from 'axios'


export default new class CATSrevice{

    add(CAT){
        axios.post('cat/save/',CAT).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('cat/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,CAT){
        await axios.put('cat/update/'+id,CAT).then(response => {
            console.log(response)
        })
    }
   
    
    async get(){
        let rds = [];
        rds = await axios.get('cat/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}