export default async function handler(req, res) {
  let data;
  if (req.query.type == 'all' || req.query.type == undefined) {
    await fetch(`https://google.com/complete/search?client=chrome&q=${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=why+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=${req.query.keyword}+vs`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=where+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=who+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=what+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=when+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=will+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=are+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=which+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=can+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);
    await fetch(`https://google.com/complete/search?client=chrome&q=how+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = [...data,...result[1]]);


  } else if(req.query.type == 'top'){
    await fetch(`https://google.com/complete/search?client=chrome&q=${req.query.keyword}`)
    .then(res => res.json()).then(result => data = result[1]);
  }
  else {
    await fetch(`https://google.com/complete/search?client=chrome&q=${req.query.type}+${req.query.keyword}`)
    .then(res => res.json()).then(result => data = result[1]); 
  }

  res.status(200).json(data)
}