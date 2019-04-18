let friends = require('../data/friends');
const path=require('path');

module.exports=function(app){
    app.get('/api/friends',function(req,res){
        res.json(friends);
    })
    app.post('/api/friends',function(req,res){
        // console.log(req.body.scores);

        let user = req.body;
        let userScore = user.scores;
        // for(var i=0;i<user.scores.length;i++){
        //     user.scores[i]=parseInt(user.scores[i]);
        // }

        let bestFriend;
        let minDiff=100;
        
        for(var i=0;i<friends.length;i++){
            // console.log(friends[i])
            let diff=0;
            for(var j=0; j<userScore.length;j++){
                diff +=Math.abs(userScore[j]-friends[i].scores[j]);
            }

            if(diff<minDiff){
                bestFriend=i
                console.log(bestFriend);
                minDiff=diff;
                bestMatchName=friends[i].name;
                matchImg=friends[i].photo;
            }
        }
        friends.push(user);

        res.json(friends[bestFriend]);
    })
}

