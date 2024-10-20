const express = require('express')
const app = express();
const connectDB = require('./DB/dbconn')
const User = require('./DB/userSchema')
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors())
// signup

app.post('/signup',async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = new User({name,email,password});
        await user.save();
        res.status(201).json({msg:'register sucessfully'})
    } catch (error) {
      console.log(error)  
    }
});

// login

// login
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
  
      // Login successful
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
      console.log(error);
    }
  });
  

connectDB()


app.get('/',(req,res)=>{
    res.send('Hey i m grooot')
})
app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})