const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// app used to access express package 

app.use(express.static(path.join(__dirname + '/public')));

// send's files so we can run our server.
app.get('/explore', (req,res) => 
{
    const filePath = path.join(__dirname, 'public', 'explore.html');
    res.sendFile(filePath, (err) => 
    {
        if (err)
            {
                console.log(err);
            }
    })
})

app.get('/map', (req,res) => {
    const filePath = path.join(__dirname, 'public', 'map.html');
    res.sendFile(filePath, (err) => {
        if (err)
            {
                console.log(err);
            }
    })
})


app.get('/history', (req,res) => {
    const filePath = path.join(__dirname, 'public', 'History.html');
    res.sendFile(filePath, (err) => {
        if (err)
            {
                console.log(err);
            }
    })
})


app.get('/explore/:mapdownloadable', (req, res) => 
{
    const routeParameters = req.params;
    const name = routeParameters.mapdownloadable;
    
    // This is for initializing our files and how we access the pdf to be downloaded
    const filePath = path.join(__dirname, 'public', 'pungaol map.pdf');
    
    // This triggers the download once we click on this url.
    res.download(filePath, (err) => 
    {
        if (err) 
        {
            console.error('Error sending the file:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
