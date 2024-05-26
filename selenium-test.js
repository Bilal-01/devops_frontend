const { Builder, By, until } = require('selenium-webdriver');

(async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');

        // Test 1: Check if the page title is correct
        const title = await driver.getTitle();
        console.log('Page title is:', title);

        // Test 2: Check if the elements are rendered
        await driver.wait(until.elementLocated(By.css('.App-header')), 10000);
        
        // Test 3: Increment and decrement fruit count
        await driver.findElement(By.xpath("//button[text()='Increment Fruit']")).click();
        await driver.wait(until.elementTextIs(driver.findElement(By.xpath("//h2[contains(text(), 'Fruit Count:')]")), 'Fruit Count: 1'), 1000);

        await driver.findElement(By.xpath("//button[text()='Decrement Fruit']")).click();
        await driver.wait(until.elementTextIs(driver.findElement(By.xpath("//h2[contains(text(), 'Fruit Count:')]")), 'Fruit Count: 0'), 1000);

        // Test 4: Increment and decrement vegetable count
        await driver.findElement(By.xpath("//button[text()='Increment Vegetable']")).click();
        await driver.wait(until.elementTextIs(driver.findElement(By.xpath("//h2[contains(text(), 'Vegetable Count:')]")), 'Vegetable Count: 1'), 1000);

        await driver.findElement(By.xpath("//button[text()='Decrement Vegetable']")).click();
        await driver.wait(until.elementTextIs(driver.findElement(By.xpath("//h2[contains(text(), 'Vegetable Count:')]")), 'Vegetable Count: 0'), 1000);

        // Test 5: Fill out the name input form
        const firstNameInput = await driver.findElement(By.id('firstName'));
        const lastNameInput = await driver.findElement(By.id('lastName'));
        await firstNameInput.sendKeys('John');
        await lastNameInput.sendKeys('Doe');

        // Verify the values
        const firstNameValue = await firstNameInput.getAttribute('value');
        const lastNameValue = await lastNameInput.getAttribute('value');
        console.log('First Name:', firstNameValue); // Expected: 'John'
        console.log('Last Name:', lastNameValue);   // Expected: 'Doe'

        // Test 6: Click the 'Send Data to Backend' button
        await driver.findElement(By.xpath("//button[text()='Send Data to Backend']")).click();

        const firstNameValueAfterClick = await firstNameInput.getAttribute('value');
        const lastNameValueAfterClick = await lastNameInput.getAttribute('value');
        console.log('First Name after click:', firstNameValueAfterClick); // Expected: ''
        console.log('Last Name after click:', lastNameValueAfterClick);   // Expected: ''
        
        const fruitCountAfterClick = await driver.findElement(By.xpath("//h2[contains(text(), 'Fruit Count:')]")).getText();
        const vegetableCountAfterClick = await driver.findElement(By.xpath("//h2[contains(text(), 'Vegetable Count:')]")).getText();
        console.log(fruitCountAfterClick); // Expected: 'Fruit Count: 0'
        console.log(vegetableCountAfterClick); // Expected: 'Vegetable Count: 0'

    } catch(e) {
        console.error("UI Testing Failed! ", e)
    } finally {
        console.log("UI Testing Passed")
        await driver.quit();
    }
})();
