var nodemailer=require('nodemailer');
var transport =nodemailer.createTransport({
    service:'gmail', 
    auth:{
    user:'dasariamrutha3@gmail.com',
    pass:'utoyfrujlrkoyxtk'
    }
});
var mailOptions={
    from:'dasariamrutha3@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'ASSESMENT',
    text:'Good Afternoon sir,This is 20A21A0535'
};
transport.sendMail(mailOptions, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent:' + info.response);
    }
});
