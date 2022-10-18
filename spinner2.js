const spinner2 = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
for (let i = 0; i < spinner2.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner2[i])}, i * 200);
}

