const nodeMailer = require('../config/nodemailer');

exports.newComment = (comment) => {
    console.log('newComment mailer');

    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');



    nodeMailer.transporter.sendMail({
        from:'shreysrivastav21@gmail.com',
        to: comment.user.email,
        subject:'New comment',
        html:htmlString,

     },(err,info)=>{
         if(err){console.log('Error in sending mail:',err);return}
         console.log('Message Sent',info)
         return;

    })
}