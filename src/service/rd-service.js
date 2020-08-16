import axios from 'axios'


export default new class RDSrevice{

    addRD(RD){
        axios.post('rds/save',RD).then(response => {
            console.log(response)
        })
    }
    async deleteRD(id){
        await axios.delete('rds/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async updateRD(id,RD){
        await axios.put('rds/update/'+id,RD).then(response => {
            console.log(response)
        })
    }
    getRD(RD){
        axios.post('rds/delete',RD).then(response => {
            console.log(response)
        })
    }
    async getRDs(){
        let rds = [];
        rds = await axios.get('rds/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}