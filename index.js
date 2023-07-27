require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000




// nabi baksh test here 
app.use(express.json())
app.use(express.urlencoded({extended : false}))









// codfadf 
app.get("/getAllData", async(req,res)=>{
    try{

        let { data, error } = await supabase.from('test007').select()

        if(data){

            res.status(200).json({success : true,data})
        }else{
            
            res.status(400).json({success : false,err})
        }
    }catch(err){
        res.status(500).json({success : false, msg : "server error"})
    }
})






app.post("/signup", async(req,res)=>{
    try{

        if(!req.body.name || !req.body.email || !req.body.password || !req.body.phn_number){

            res.status(400).json({success : false, msg : "invalid Creditionals"})
        }
        
        console.log(req.body.name)
        console.log(req.body.email)
        console.log(req.body.password)
        console.log(req.body.phn_number)
        const { error } = await supabase
        .from('test007')
        .insert(
            { 
                Name : req.body.name, 
                email: req.body.email, 
                password : req.body.password, 
                phn_number : req.body.phn_number 
            })
            
            if(!error){
                res.status(201).json({success : true, msg : "registered successfully"})
                
            }else{
                console.log(error)
                res.status(400).json({success : true, msg : "something went wrong try again.."})
                
            }

    }catch(err){
        res.status(500).json({success : false, msg : "server error"})
    }
})




// user upate

app.post("/update_user", async(req,res)=>{
    try{

        var obj = {"id" : req.body.id}
        // console.log(req.body)
        if(req.body.name){
            obj.Name = req.body.name
        }
        if(req.body.email){
            obj.email = req.body.email
            
        }if(req.body.phn_number){
            obj.phn_number = req.body.phn_number
        }

        console.log("obje ", obj)
        if(obj){

            const { error } = await supabase
            .from('test007')
            .update(obj)
            .eq('id',obj.id)
            
            console.log("error ", error)
            if(error == null){ 

                


                res.status(200).json({success : true, msg : "data update successfully"})
            }else{
                



               





                res.status(400).json({success : false, msg : "not updated plz try again later.."})
            }
        }else{
            res.status(400).json({success : false, msg : "invalid creditionals"})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({success : false, msg : "server error"})
    }
})







// search data
app.post("/search", async(req,res)=>{
    try{

        let {data, err} = await supabase.from("test007")
        .select()
        .eq("Name", req.body.name)
        .order('id', { ascending: false})
        .limit(10)

        console.log(data)

        res.status(200).json({success : true})
    }catch(err){
        res.status(500).json({success : false, msg : "server error"})
    }
})



app.listen(PORT, ()=>{
    console.log("server started successfuly")
})