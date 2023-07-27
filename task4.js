const module=require('');
const dir=process.argv[2];
const ext=process.argv[3];
module(dir,ext,(err,list)=>{
    if(err){
        return console.error(err);
    }
    list.forEach((file)=>{
        console.log(file);
    });
});