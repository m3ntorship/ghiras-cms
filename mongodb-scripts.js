const {MongoClient, ObjectId} = require("mongodb");
const mongoUrl =
  "mongodb+srv://m3ntorship-dev:kmJDK81m4Bl3Ysh3@charity-ros2p.mongodb.net";


  const updateFileUrl = dCollection => ( doc) => {
    let {_id, url} = doc
    let filename = require('url').parse(url).path;
    let newUrl = `https://s3.m3ntorship.net/charity-cms-dev${filename}`
   return  dCollection.updateOne(
          { "_id" : _id },
          { $set: { "url" : newUrl } }
       ); 
  }
async function main() {
  let client, db;
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db("charity-dev-ar");
    let dCollection = db.collection("upload_file");
     let result = await dCollection.find({url: /charity-cms-dev\.s3\.eu-central-1\.amazonaws\.com/i});

    let docs = await result.toArray();

    await Promise.all(docs.map(updateFileUrl(dCollection)));
    
    console.log('done')
  } catch (err) {
    console.error(err);
  } finally {
    // catch any mongo error here
    client.close();
  } // make sure to close your connection after
}

main();
