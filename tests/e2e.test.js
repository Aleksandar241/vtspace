const launch = require('puppeteer').launch;

describe("App flow", () => {
  let browser;
  let page;
  jest.setTimeout(300000);

  beforeAll(async () => {
    browser = await launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should display the login form", async () => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector("#login-form-header");
    const loginFormTitle = await page.$eval("#login-form-header", (e) => e.innerHTML);
    expect(loginFormTitle).toMatch("Prijava");
  });

  it("should fill in email and password fields, click the login button, and navigate to a new page", async () => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector("#login-email");
    await page.type("#login-email", "vasica241@gmail.com");
    await page.type("#login-password", "12345678"); 
    await page.click("#login-button");
    await page.waitForNavigation(); 
  
    const userCardExists = await page.waitForSelector("#user-card", { timeout: 50000, visible: true });
    expect(userCardExists).toBeTruthy();
  });

  // it("should fill the user form",  async () => {
  //   await page.goto("http://localhost:5173");
  //   await page.waitForSelector("#user-modal-button");
  //   await page.click("#user-modal-button");

  //   await page.waitForSelector("#user-form-name");
  //   await page.waitForSelector("#user-form-surname");
  //   await page.waitForSelector("#user-form-img-url");
  //   await page.waitForSelector("#user-update-button");

  //   await page.click("#user-form-name", { clickCount: 3 });
  //   await page.keyboard.press("Backspace");
  //   await page.type("#user-form-name", "Petar");


  //   await page.click("#user-form-surname", { clickCount: 3 });
  //   await page.keyboard.press("Backspace");
  //   await page.type("#user-form-surname", "Petrovic"); 

  //   await page.click("#user-form-img-url", { clickCount: 3 });
  //   await page.keyboard.press("Backspace");
  //   await page.type("#user-form-img-url", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjvLMABNQux52zWG7hmIBVCuozAB7956fRyfujhzW&s"); 

  //   await page.waitForSelector("#user-update-button");
  //   await page.click("#user-update-button");


  //   await page.waitForSelector("#user-image", { timeout: 50000, visible: true });
  //   await page.waitForSelector("#user-name", { timeout: 50000, visible: true });

  //   const userName = await page.$eval("#user-name", (e) => e.innerHTML);
  //   const imageSrc = await page.$eval("#user-image", (img) => img.getAttribute("src"));
  
  //   expect(userName).toBe("Petar Petrovic"); 
  //   expect(imageSrc).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjvLMABNQux52zWG7hmIBVCuozAB7956fRyfujhzW&s"); 
  // });


  it("should create new post",  async () => {
    await page.goto("http://localhost:5173");



    await page.waitForSelector("#post-modal-button");
    await page.click("#post-modal-button");

    await page.waitForSelector("#post-title");
    await page.waitForSelector("#post-description");
    await page.waitForSelector("#create-new-post-button");


    await page.type("#post-title", "Novi post title");
    await page.type("#post-description", "Novi post description"); 
  
    await page.click("#create-new-post-button");


    await page.waitForSelector("#post-list", { timeout: 50000, visible: true });

    await page.screenshot({ path: 'new_post.png' })
    await browser.close()
  
  });

});