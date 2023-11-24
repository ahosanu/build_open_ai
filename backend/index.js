import express from 'express';
import { fileURLToPath } from 'url';
import moment from 'moment-timezone';
import puppeteer from 'puppeteer';
import cors from 'cors';
import path from "path";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors())
const port = 80; // Choose a port for your Express server

app.use(express.static(path.join(__dirname, 'app_ui')));

app.get('/api/name', async (req, res) => {
    const name = req.query.name;
    if (name && name?.length > 0) {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--enable-features=NetworkService', '--disable-features=site-per-process'],
        });
        const page = await browser.newPage();
        await page.setJavaScriptEnabled(true);
        await page.setExtraHTTPHeaders({'Accept-Language': 'en'});
        // You can use any UserAgent you want
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36');

        await page.goto('https://www.coopervisionpromotions.com/api/dealers?dealerName=' + name, {timeout: 30000});
        /*        const cookies = [
                    { name: 'cookieName', value: 'cookieValue', domain: 'coopervisionpromotions.com' },
                    // Add more cookies as needed
                ];
                await page.setCookie(...cookies);*/

        await page.waitForSelector('body', {timeout: 10000});
        const elementContent = await page.evaluate(() => {
            const element = document.querySelector('body'); // Replace with your element's selector
            return element ? element.textContent : null;
        });
        //res.send(elementContent);

        if (elementContent !== null) {
            res.send(elementContent);
        } else {
            res.json({
                "success": true,
                "dealers": []
            });
        }
        await browser.close();


        // Navigate to a web page
    } else {
        res.json({
            "success": true,
            "dealers": []
        });
    }

});

app.get('/api/models', async (req, res) => {

    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--enable-features=NetworkService', '--disable-features=site-per-process'],
        });
        const page = await browser.newPage();
        await page.setJavaScriptEnabled(true);
        await page.setExtraHTTPHeaders({'Accept-Language': 'en'});
        // You can use any UserAgent you want
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36');

        await page.goto('https://www.coopervisionpromotions.com/api/models', {timeout: 30000});
        /*        const cookies = [
                    { name: 'cookieName', value: 'cookieValue', domain: 'coopervisionpromotions.com' },
                    // Add more cookies as needed
                ];
                await page.setCookie(...cookies);*/

        await page.waitForSelector('body', {timeout: 10000});
        const elementContent = await page.evaluate(() => {
            const element = document.querySelector('body'); // Replace with your element's selector
            return element ? element.textContent : null;
        });
        //res.send(elementContent);

        if (elementContent !== null) {
            res.send(elementContent);
        } else {
            res.json({
                "success": true,
                "dealers": []
            });
        }
        await browser.close();


        // Navigate to a web page
    } catch (e) {
        console.log(e)
        res.json({
            "success": true,
            "dealers": []
        });
    }

});


app.get('/api/programs', async (req, res) => {

    res.send({
        "success": true,
        "programs": [
            {
                "id": "85684",
                "code": "23-12461",
                "name": "2HF23 National New Wearer Rebate Option 1",
                "description": "Claim your full rebate.",
                "domain": "coopervisionpromotions.com",
                "resources": {
                    "imageUrl": "https://d1ab1kwvt5nhjz.cloudfront.net/cvi/CVI_Donations_Badge_No_Donation.jpg"
                },
                "cutOffDate": "2024-03-30T23:59:59-04:00",
                "expiryDate": "2024-04-14T23:59:59-04:00",
                "termsAndConditions": "REBATE TERMS & CONDITIONS: To receive your rebate, you must satisfy each of the rebate requirements and provide the following documentation: (A) an eye exam/lens fitting receipt with patient name; (B) a valid sales receipt for a qualifying contact lens purchase that includes: (i) patient name; (ii) purchase location; (iii) CooperVision contact lens product purchased; (iv) number of boxes purchased; and (v) date of purchase; and (C) a product box end panel (one for each eye). Failure to follow each of these steps is a rejection of this rebate offer. Offer valid only for residents of the U.S., Puerto Rico and U.S. Virgin Islands. Offer valid only when contact lenses are purchased from prescribing eye care professional or affiliated location. Offer not valid where prohibited by law and not valid with any other offer or rebates. Rebate not valid in combination with purchase at 1-800 CONTACTS, Costco or Internet Retailers. Allow up to 6 weeks to receive the payment email with instructions for redeeming a physical or virtual prepaid card. CooperVision reserves the right to cancel, suspend, or modify part of or this entire rebate program at any time without notice, for any reason in its sole discretion including for fraud prevention measures. CooperVision is not responsible for lost, late, illegible, stolen, or incomplete requests. All submitted materials become property of CooperVision and will not be returned. Limit one rebate per person per (12) twelve-month period based on purchase date and five (5) rebates per address and/or email address per twelve (12) month period, except where prohibited by law. Excessive submissions and/or other fraudulent activities may result in federal prosecution under the U.S. mail fraud statutes (Title 18 United States Code Sections 1341 and 1342). You represent that you are legally competent and have the legal authority to submit this rebate application; further, you represent that you are a new wearer of CooperVision branded contact lenses. Submissions made on behalf of a consumer by an eye care provider may result in the rejection of this rebate offer. If you elect to donate all, or part, of your rebate amount, all donated rebate money submitted between 07/01/2023 - 12/31/2023 will be contributed by CooperVision to Optometry Giving Sight. © 2023 CooperVision. • If you don’t have access to the internet, please call 1-877-875-6043 for assistance. Notice of Financial Incentive This notice applies only to California residents. For more information about CooperVision’s data handling practices and capitalized terms used in this notice, please see our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. We are providing you the opportunity to participate in our rebate program so that we may better understand you and your interests and to analyze and improve our product offerings and business. By participating in our rebate program, you may provide us certain personal information including: • Contact Data, such as your first and last name, email address, mailing address, and telephone number. • Profile and Demographic Data, such as your age, gender, city of residence, interests, and preferences. • Payments and Transactional Data, such as your purchase history, including product information. • Research Data, such as survey responses (including whether you are new to CooperVision, new to contact lenses, and prior contact lens brand). • Device Data, such as general information about your computer or mobile device, including IP address. • Online Activity Data, such as your activity on a page or screen. In addition to analyzing and improving our product offerings and business, we collect this information in order to send you your rebate and to prevent fraud. Additional information on how we may use your personal information can be found in our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. To thank you for participating in this program, we may provide you with a rebate on a qualifying contact lens purchase. The value of the rebate depends on various factors, including but not limited to the following, which collectively is reasonably related to the value of your data: the product you purchased; the benefit that we realize and expect to realize from your participation in our rebate program; your purchase history; and any increased goodwill towards us. As part of your rebate application, you may choose to receive marketing and promotional communications from us. If you opt-in to receiving such communications, your name and email address will be added to our general marketing contact list. You may remove yourself from this list at any time by contacting us at 1-800-341-2020 or clicking on the ‘Unsubscribe’ button at the bottom of any email communication.",
                "purchaseStartDate": "2023-07-01T00:00:00-07:00",
                "purchaseEndDate": "2023-12-31T23:59:59-05:00",
                "fulfillmentRewards": [
                    {
                        "id": "12eb2555-35db-4b29-b2b4-957fe3413a22",
                        "paymentMode": "reward",
                        "name": "CooperVision Visa® Prepaid Card",
                        "type": "swiftDigitalChoiceNonReloadable",
                        "image": "https://d1ab1kwvt5nhjz.cloudfront.net/cvi/NoDonation_CardImg.png",
                        "associatedItems": [
                            {
                                "id": "2153942",
                                "name": "(4) Biofinity XR",
                                "productLine": "Biofinity sphere",
                                "brand": "Biofinity",
                                "purchasePrice": 1,
                                "amountPayable": 30,
                                "serialNumber": "",
                                "quantity": 1,
                                "lineNumber": 1,
                                "isZeroOutClaim": false
                            }
                        ],
                        "rebateAmount": 30,
                        "associatedStandalones": []
                    }
                ],
                "survey": "cvi20232ndhf",
                "rebateAmount": 30,
                "claim": {
                    "state": "submitted"
                }
            },
            {
                "id": "85685",
                "code": "23-12461_5",
                "name": "2HF23 National New Wearer Rebate Option 2",
                "description": "Donate $5. Give the gift of vision to one person, plus get a tax deductible receipt.",
                "domain": "coopervisionpromotions.com",
                "resources": {
                    "imageUrl": "https://d1ab1kwvt5nhjz.cloudfront.net/cvi/CVI_Donations_Badge_5.jpg"
                },
                "cutOffDate": "2024-03-30T23:59:59-04:00",
                "expiryDate": "2024-04-14T23:59:59-04:00",
                "termsAndConditions": "REBATE TERMS & CONDITIONS: To receive your rebate, you must satisfy each of the rebate requirements and provide the following documentation: (A) an eye exam/lens fitting receipt with patient name; (B) a valid sales receipt for a qualifying contact lens purchase that includes: (i) patient name; (ii) purchase location; (iii) CooperVision contact lens product purchased; (iv) number of boxes purchased; and (v) date of purchase; and (C) a product box end panel (one for each eye). Failure to follow each of these steps is a rejection of this rebate offer. Offer valid only for residents of the U.S., Puerto Rico and U.S. Virgin Islands. Offer valid only when contact lenses are purchased from prescribing eye care professional or affiliated location. Offer not valid where prohibited by law and not valid with any other offer or rebates. Rebate not valid in combination with purchase at 1-800 CONTACTS, Costco or Internet Retailers. Allow up to 6 weeks to receive the payment email with instructions for redeeming a physical or virtual prepaid card. CooperVision reserves the right to cancel, suspend, or modify part of or this entire rebate program at any time without notice, for any reason in its sole discretion including for fraud prevention measures. CooperVision is not responsible for lost, late, illegible, stolen, or incomplete requests. All submitted materials become property of CooperVision and will not be returned. Limit one rebate per person per (12) twelve-month period based on purchase date and five (5) rebates per address and/or email address per twelve (12) month period, except where prohibited by law. Excessive submissions and/or other fraudulent activities may result in federal prosecution under the U.S. mail fraud statutes (Title 18 United States Code Sections 1341 and 1342). You represent that you are legally competent and have the legal authority to submit this rebate application; further, you represent that you are a new wearer of CooperVision branded contact lenses. Submissions made on behalf of a consumer by an eye care provider may result in the rejection of this rebate offer. If you elect to donate all, or part, of your rebate amount, all donated rebate money submitted between 07/01/2023 - 12/31/2023 will be contributed by CooperVision to Optometry Giving Sight. © 2023 CooperVision. • If you don’t have access to the internet, please call 1-877-875-6043 for assistance. Notice of Financial Incentive This notice applies only to California residents. For more information about CooperVision’s data handling practices and capitalized terms used in this notice, please see our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. We are providing you the opportunity to participate in our rebate program so that we may better understand you and your interests and to analyze and improve our product offerings and business. By participating in our rebate program, you may provide us certain personal information including: • Contact Data, such as your first and last name, email address, mailing address, and telephone number. • Profile and Demographic Data, such as your age, gender, city of residence, interests, and preferences. • Payments and Transactional Data, such as your purchase history, including product information. • Research Data, such as survey responses (including whether you are new to CooperVision, new to contact lenses, and prior contact lens brand). • Device Data, such as general information about your computer or mobile device, including IP address. • Online Activity Data, such as your activity on a page or screen. In addition to analyzing and improving our product offerings and business, we collect this information in order to send you your rebate and to prevent fraud. Additional information on how we may use your personal information can be found in our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. To thank you for participating in this program, we may provide you with a rebate on a qualifying contact lens purchase. The value of the rebate depends on various factors, including but not limited to the following, which collectively is reasonably related to the value of your data: the product you purchased; the benefit that we realize and expect to realize from your participation in our rebate program; your purchase history; and any increased goodwill towards us. As part of your rebate application, you may choose to receive marketing and promotional communications from us. If you opt-in to receiving such communications, your name and email address will be added to our general marketing contact list. You may remove yourself from this list at any time by contacting us at 1-800-341-2020 or clicking on the ‘Unsubscribe’ button at the bottom of any email communication.",
                "purchaseStartDate": "2023-07-01T00:00:00-07:00",
                "purchaseEndDate": "2023-12-31T23:59:59-05:00",
                "fulfillmentRewards": [
                    {
                        "id": "12eb2555-35db-4b29-b2b4-957fe3413a22",
                        "paymentMode": "reward",
                        "name": "CooperVision Visa® Prepaid Card",
                        "type": "swiftDigitalChoiceNonReloadable",
                        "image": "https://login.360incentives.com/Shared/Uploads/265/Library/Images/thankyou5_newlogo.jpg",
                        "associatedItems": [
                            {
                                "id": "2153942",
                                "name": "(4) Biofinity XR",
                                "productLine": "Biofinity sphere",
                                "brand": "Biofinity",
                                "purchasePrice": 1,
                                "amountPayable": 30,
                                "serialNumber": "",
                                "quantity": 1,
                                "lineNumber": 1,
                                "isZeroOutClaim": false
                            }
                        ],
                        "rebateAmount": 25,
                        "associatedStandalones": [
                            {
                                "id": "566553",
                                "code": "5 Dollar Donation",
                                "associatedLineNumbers": [
                                    1
                                ],
                                "amountPayable": -5
                            }
                        ]
                    }
                ],
                "survey": "cvi20232ndhf",
                "rebateAmount": 25,
                "claim": {
                    "state": "submitted"
                }
            },
            {
                "id": "85686",
                "code": "23-12461_10",
                "name": "2HF23 National New Wearer Rebate Option 3",
                "description": "Donate $10. Give the gift of vision to two people, plus get a tax deductible receipt.",
                "domain": "coopervisionpromotions.com",
                "resources": {
                    "imageUrl": "https://d1ab1kwvt5nhjz.cloudfront.net/cvi/CVI_Donations_Badge_10.jpg"
                },
                "cutOffDate": "2024-03-30T23:59:59-04:00",
                "expiryDate": "2024-04-14T23:59:59-04:00",
                "termsAndConditions": "REBATE TERMS & CONDITIONS: To receive your rebate, you must satisfy each of the rebate requirements and provide the following documentation: (A) an eye exam/lens fitting receipt with patient name; (B) a valid sales receipt for a qualifying contact lens purchase that includes: (i) patient name; (ii) purchase location; (iii) CooperVision contact lens product purchased; (iv) number of boxes purchased; and (v) date of purchase; and (C) a product box end panel (one for each eye). Failure to follow each of these steps is a rejection of this rebate offer. Offer valid only for residents of the U.S., Puerto Rico and U.S. Virgin Islands. Offer valid only when contact lenses are purchased from prescribing eye care professional or affiliated location. Offer not valid where prohibited by law and not valid with any other offer or rebates. Rebate not valid in combination with purchase at 1-800 CONTACTS, Costco or Internet Retailers. Allow up to 6 weeks to receive the payment email with instructions for redeeming a physical or virtual prepaid card. CooperVision reserves the right to cancel, suspend, or modify part of or this entire rebate program at any time without notice, for any reason in its sole discretion including for fraud prevention measures. CooperVision is not responsible for lost, late, illegible, stolen, or incomplete requests. All submitted materials become property of CooperVision and will not be returned. Limit one rebate per person per (12) twelve-month period based on purchase date and five (5) rebates per address and/or email address per twelve (12) month period, except where prohibited by law. Excessive submissions and/or other fraudulent activities may result in federal prosecution under the U.S. mail fraud statutes (Title 18 United States Code Sections 1341 and 1342). You represent that you are legally competent and have the legal authority to submit this rebate application; further, you represent that you are a new wearer of CooperVision branded contact lenses. Submissions made on behalf of a consumer by an eye care provider may result in the rejection of this rebate offer. If you elect to donate all, or part, of your rebate amount, all donated rebate money submitted between 07/01/2023 - 12/31/2023 will be contributed by CooperVision to Optometry Giving Sight. © 2023 CooperVision. • If you don’t have access to the internet, please call 1-877-875-6043 for assistance. Notice of Financial Incentive This notice applies only to California residents. For more information about CooperVision’s data handling practices and capitalized terms used in this notice, please see our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. We are providing you the opportunity to participate in our rebate program so that we may better understand you and your interests and to analyze and improve our product offerings and business. By participating in our rebate program, you may provide us certain personal information including: • Contact Data, such as your first and last name, email address, mailing address, and telephone number. • Profile and Demographic Data, such as your age, gender, city of residence, interests, and preferences. • Payments and Transactional Data, such as your purchase history, including product information. • Research Data, such as survey responses (including whether you are new to CooperVision, new to contact lenses, and prior contact lens brand). • Device Data, such as general information about your computer or mobile device, including IP address. • Online Activity Data, such as your activity on a page or screen. In addition to analyzing and improving our product offerings and business, we collect this information in order to send you your rebate and to prevent fraud. Additional information on how we may use your personal information can be found in our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. To thank you for participating in this program, we may provide you with a rebate on a qualifying contact lens purchase. The value of the rebate depends on various factors, including but not limited to the following, which collectively is reasonably related to the value of your data: the product you purchased; the benefit that we realize and expect to realize from your participation in our rebate program; your purchase history; and any increased goodwill towards us. As part of your rebate application, you may choose to receive marketing and promotional communications from us. If you opt-in to receiving such communications, your name and email address will be added to our general marketing contact list. You may remove yourself from this list at any time by contacting us at 1-800-341-2020 or clicking on the ‘Unsubscribe’ button at the bottom of any email communication.",
                "purchaseStartDate": "2023-07-01T00:00:00-07:00",
                "purchaseEndDate": "2023-12-31T23:59:59-05:00",
                "fulfillmentRewards": [
                    {
                        "id": "12eb2555-35db-4b29-b2b4-957fe3413a22",
                        "paymentMode": "reward",
                        "name": "CooperVision Visa® Prepaid Card",
                        "type": "swiftDigitalChoiceNonReloadable",
                        "image": "https://login.360incentives.com/Shared/Uploads/265/Library/Images/thankyou10_newlogo.jpg",
                        "associatedItems": [
                            {
                                "id": "2153942",
                                "name": "(4) Biofinity XR",
                                "productLine": "Biofinity sphere",
                                "brand": "Biofinity",
                                "purchasePrice": 1,
                                "amountPayable": 30,
                                "serialNumber": "",
                                "quantity": 1,
                                "lineNumber": 1,
                                "isZeroOutClaim": false
                            }
                        ],
                        "rebateAmount": 20,
                        "associatedStandalones": [
                            {
                                "id": "566554",
                                "code": "10 Dollar Donation",
                                "associatedLineNumbers": [
                                    1
                                ],
                                "amountPayable": -10
                            }
                        ]
                    }
                ],
                "survey": "cvi20232ndhf",
                "rebateAmount": 20,
                "claim": {
                    "state": "submitted"
                }
            },
            {
                "id": "85688",
                "code": "23-12461_all",
                "name": "2HF23 National New Wearer Rebate Option 4",
                "description": "Donate your entire rebate. Give the gift of vision to five or more people, plus get a tax deductible receipt.",
                "domain": "coopervisionpromotions.com",
                "resources": {
                    "imageUrl": "https://d1ab1kwvt5nhjz.cloudfront.net/cvi/CVI_Donations_Badge_FULL.jpg"
                },
                "cutOffDate": "2024-03-30T23:59:59-04:00",
                "expiryDate": "2024-04-14T23:59:59-04:00",
                "termsAndConditions": "REBATE TERMS & CONDITIONS: To receive your rebate, you must satisfy each of the rebate requirements and provide the following documentation: (A) an eye exam/lens fitting receipt with patient name; (B) a valid sales receipt for a qualifying contact lens purchase that includes: (i) patient name; (ii) purchase location; (iii) CooperVision contact lens product purchased; (iv) number of boxes purchased; and (v) date of purchase; and (C) a product box end panel (one for each eye). Failure to follow each of these steps is a rejection of this rebate offer. Offer valid only for residents of the U.S., Puerto Rico and U.S. Virgin Islands. Offer valid only when contact lenses are purchased from prescribing eye care professional or affiliated location. Offer not valid where prohibited by law and not valid with any other offer or rebates. Rebate not valid in combination with purchase at 1-800 CONTACTS, Costco or Internet Retailers. Allow up to 6 weeks to receive the payment email with instructions for redeeming a physical or virtual prepaid card. CooperVision reserves the right to cancel, suspend, or modify part of or this entire rebate program at any time without notice, for any reason in its sole discretion including for fraud prevention measures. CooperVision is not responsible for lost, late, illegible, stolen, or incomplete requests. All submitted materials become property of CooperVision and will not be returned. Limit one rebate per person per (12) twelve-month period based on purchase date and five (5) rebates per address and/or email address per twelve (12) month period, except where prohibited by law. Excessive submissions and/or other fraudulent activities may result in federal prosecution under the U.S. mail fraud statutes (Title 18 United States Code Sections 1341 and 1342). You represent that you are legally competent and have the legal authority to submit this rebate application; further, you represent that you are a new wearer of CooperVision branded contact lenses. Submissions made on behalf of a consumer by an eye care provider may result in the rejection of this rebate offer. If you elect to donate all, or part, of your rebate amount, all donated rebate money submitted between 07/01/2023 - 12/31/2023 will be contributed by CooperVision to Optometry Giving Sight. © 2023 CooperVision. • If you don’t have access to the internet, please call 1-877-875-6043 for assistance. Notice of Financial Incentive This notice applies only to California residents. For more information about CooperVision’s data handling practices and capitalized terms used in this notice, please see our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. We are providing you the opportunity to participate in our rebate program so that we may better understand you and your interests and to analyze and improve our product offerings and business. By participating in our rebate program, you may provide us certain personal information including: • Contact Data, such as your first and last name, email address, mailing address, and telephone number. • Profile and Demographic Data, such as your age, gender, city of residence, interests, and preferences. • Payments and Transactional Data, such as your purchase history, including product information. • Research Data, such as survey responses (including whether you are new to CooperVision, new to contact lenses, and prior contact lens brand). • Device Data, such as general information about your computer or mobile device, including IP address. • Online Activity Data, such as your activity on a page or screen. In addition to analyzing and improving our product offerings and business, we collect this information in order to send you your rebate and to prevent fraud. Additional information on how we may use your personal information can be found in our California Privacy Policy, located at https://coopervision.com/california-privacy-policy. To thank you for participating in this program, we may provide you with a rebate on a qualifying contact lens purchase. The value of the rebate depends on various factors, including but not limited to the following, which collectively is reasonably related to the value of your data: the product you purchased; the benefit that we realize and expect to realize from your participation in our rebate program; your purchase history; and any increased goodwill towards us. As part of your rebate application, you may choose to receive marketing and promotional communications from us. If you opt-in to receiving such communications, your name and email address will be added to our general marketing contact list. You may remove yourself from this list at any time by contacting us at 1-800-341-2020 or clicking on the ‘Unsubscribe’ button at the bottom of any email communication.",
                "purchaseStartDate": "2023-07-01T00:00:00-07:00",
                "purchaseEndDate": "2023-12-31T23:59:59-05:00",
                "fulfillmentRewards": [
                    {
                        "id": "a2a3b36d-d24e-43cb-b119-b30caeb40c96",
                        "paymentMode": "reward",
                        "name": "Full Donation",
                        "type": "externalProcessNoActivation",
                        "image": "https://login.360incentives.com/Shared/Uploads/265/Library/Images/thankyoufull_newlogo.jpg",
                        "associatedItems": [
                            {
                                "id": "2153942",
                                "name": "(4) Biofinity XR",
                                "productLine": "Biofinity sphere",
                                "brand": "Biofinity",
                                "purchasePrice": 1,
                                "amountPayable": 30,
                                "serialNumber": "",
                                "quantity": 1,
                                "lineNumber": 1,
                                "isZeroOutClaim": false
                            }
                        ],
                        "rebateAmount": 0,
                        "associatedStandalones": [
                            {
                                "id": "566555",
                                "code": "30 Dollar Donation - Single Product",
                                "associatedLineNumbers": [
                                    1
                                ],
                                "amountPayable": -30
                            }
                        ]
                    }
                ],
                "survey": "cvi20232ndhf",
                "rebateAmount": 0,
                "claim": {
                    "state": "submitted"
                }
            }
        ]
    });

});


app.get('/api', (req, res) => {
    res.json({
        "success": true,
        "dealers": [{
            "_id": "2128074",
            "name": "LENSCRAFTERS 0741 (JDA 741)",
            "websiteUrl": "",
            "address": {
                "address1": "MAIN PLACE EYE EXAM 2000",
                "address2": "2800 N MAIN ST STE 104",
                "city": "SANTA ANA",
                "province": "CA",
                "postalCode": "92705",
                "country": "US",
                "phone": "(714)547-8194"
            },
            "id": "2128074",
            "relevancy": 156.25
        }, {
            "_id": "2102772",
            "name": "MYEYEDR OF TX #741",
            "websiteUrl": "",
            "address": {
                "address1": "1169 N. BURLESON BLVD STE 131",
                "address2": "",
                "city": "BURLESON",
                "province": "TX",
                "postalCode": "76028",
                "country": "US",
                "phone": "(817)426-6060"
            },
            "id": "2102772",
            "relevancy": 125
        }, {
            "_id": "2103072",
            "name": "CALL, PARKER OD #741",
            "websiteUrl": "",
            "address": {
                "address1": "2737 CROSSROADS BLVD",
                "address2": "",
                "city": "GRAND JUNCTION",
                "province": "CO",
                "postalCode": "81506",
                "country": "US",
                "phone": "(970)243-9681"
            },
            "id": "2103072",
            "relevancy": 125
        }, {
            "_id": "2140292",
            "name": "SEARS OPTICAL #741",
            "websiteUrl": "",
            "address": {
                "address1": "24300 LAGUNA HILLS",
                "address2": "SEARS OPTICAL DEPT",
                "city": "LAGUNA HILLS",
                "province": "CA",
                "postalCode": "92653",
                "country": "US",
                "phone": "(949)837-2507"
            },
            "id": "2140292",
            "relevancy": 125
        }, {
            "_id": "2149678",
            "name": "COSTCO OPTICAL #741",
            "websiteUrl": "",
            "address": {
                "address1": "1540 FROOM RANCH WAY",
                "address2": "",
                "city": "SAN LUIS OBISPO",
                "province": "CA",
                "postalCode": "93405",
                "country": "US",
                "phone": "(805)541-7003"
            },
            "id": "2149678",
            "relevancy": 125
        }, {
            "_id": "2369361",
            "name": "WAL-MART VISION CENTER #741",
            "websiteUrl": "",
            "address": {
                "address1": "911 HWY 321 N",
                "address2": "DELIVER TO OPTICAL MANAGER",
                "city": "LENOIR CITY",
                "province": "TN",
                "postalCode": "37771",
                "country": "US",
                "phone": "(865)986-7569"
            },
            "id": "2369361",
            "relevancy": 125
        }, {
            "_id": "2094878",
            "name": "SAMS CLUB OPTICAL #4733",
            "websiteUrl": "",
            "address": {
                "address1": "741 E LITTLE CREEK RD",
                "address2": "DELIVER TO OPTICAL",
                "city": "NORFOLK",
                "province": "VA",
                "postalCode": "23518",
                "country": "US",
                "phone": "(757)448-6844"
            },
            "id": "2094878",
            "relevancy": 75
        }, {
            "_id": "2095859",
            "name": "GEORGIA EYE INST  SE LLC",
            "websiteUrl": "",
            "address": {
                "address1": "741 WEEPING WILLOW DR",
                "address2": "",
                "city": "HINESVILLE",
                "province": "GA",
                "postalCode": "31313",
                "country": "US",
                "phone": "(912)368-2522"
            },
            "id": "2095859",
            "relevancy": 75
        }, {
            "_id": "2097805",
            "name": "T CAMPEN MD AND ASSOCIATED LLC",
            "websiteUrl": "",
            "address": {
                "address1": "741 N UNIVERSITY DR",
                "address2": "",
                "city": "CORAL SPRINGS",
                "province": "FL",
                "postalCode": "33071",
                "country": "US",
                "phone": "(954)422-8090"
            },
            "id": "2097805",
            "relevancy": 75
        }, {
            "_id": "2119348",
            "name": "MY EYELAB #39",
            "websiteUrl": "",
            "address": {
                "address1": "741 N UNIVERSITY DR",
                "address2": "",
                "city": "CORAL SPRINGS",
                "province": "FL",
                "postalCode": "33071",
                "country": "US",
                "phone": "(954)228-8090"
            },
            "id": "2119348",
            "relevancy": 75
        }, {
            "_id": "2126209",
            "name": "HENRY, MORRIS MD",
            "websiteUrl": "",
            "address": {
                "address1": "741 E VANASCHE DR",
                "address2": "",
                "city": "FAYETTEVILLE",
                "province": "AR",
                "postalCode": "72703",
                "country": "US",
                "phone": "(479)442-5227"
            },
            "id": "2126209",
            "relevancy": 75
        }, {
            "_id": "2128300",
            "name": "SHADOWRIDGE FAMILY VIS #4624",
            "websiteUrl": "",
            "address": {
                "address1": "741 SHADOWRIDGE DR",
                "address2": "",
                "city": "VISTA",
                "province": "CA",
                "postalCode": "92083",
                "country": "US",
                "phone": "(760)727-1844"
            },
            "id": "2128300",
            "relevancy": 75
        }, {
            "_id": "2131787",
            "name": "SOUTHWEST EYE CARE",
            "websiteUrl": "",
            "address": {
                "address1": "741 ENTERPRISE DR",
                "address2": "",
                "city": "BELLE PLAINE",
                "province": "MN",
                "postalCode": "56011",
                "country": "US",
                "phone": "(952)495-6070"
            },
            "id": "2131787",
            "relevancy": 75
        }, {
            "_id": "2136564",
            "name": "SHARE, CLIFFORD MD",
            "websiteUrl": "",
            "address": {
                "address1": "741 DUNLAWTON AVE",
                "address2": "",
                "city": "PORT ORANGE",
                "province": "FL",
                "postalCode": "32127",
                "country": "US",
                "phone": "(386)761-6665"
            },
            "id": "2136564",
            "relevancy": 75
        }, {
            "_id": "2146368",
            "name": "COSTCO OPT #183",
            "websiteUrl": "",
            "address": {
                "address1": "741 ORANGE AVE",
                "address2": "",
                "city": "ALTAMONTE SPRINGS",
                "province": "FL",
                "postalCode": "32714",
                "country": "US",
                "phone": "(407)786-7814"
            },
            "id": "2146368",
            "relevancy": 75
        }, {
            "_id": "2148097",
            "name": "DIAMOND, JEREMY L OD",
            "websiteUrl": "",
            "address": {
                "address1": "741 E BROADWAY PO BOX 247",
                "address2": "DRS MORRILL & DIAMOND",
                "city": "JEFFERSON CITY",
                "province": "TN",
                "postalCode": "37760",
                "country": "US",
                "phone": "(865)475-8680"
            },
            "id": "2148097",
            "relevancy": 75
        }, {
            "_id": "2149320",
            "name": "VISIONWORKS #399",
            "websiteUrl": "",
            "address": {
                "address1": "741 N ALAFAYA TRL",
                "address2": "",
                "city": "ORLANDO",
                "province": "FL",
                "postalCode": "32828",
                "country": "US",
                "phone": "(407)658-0375"
            },
            "id": "2149320",
            "relevancy": 75
        }, {
            "_id": "2371871",
            "name": "SHADOWRIDGE FAMILY VIS",
            "websiteUrl": "",
            "address": {
                "address1": "741 SHADOWRIDGE DR",
                "address2": "",
                "city": "VISTA",
                "province": "CA",
                "postalCode": "92083",
                "country": "US",
                "phone": "(760)727-1844"
            },
            "id": "2371871",
            "relevancy": 75
        }, {
            "_id": "2092142",
            "name": "DI DONATO OPTICIANS 74153",
            "websiteUrl": "",
            "address": {
                "address1": "918 S WHITEHORSE PIKE",
                "address2": "",
                "city": "SOMERDALE",
                "province": "NJ",
                "postalCode": "08083",
                "country": "US",
                "phone": "(609)783-4545"
            },
            "id": "2092142",
            "relevancy": 62.5
        }, {
            "_id": "2369713",
            "name": "BORCHERS, SAMUEL OD #74111",
            "websiteUrl": null,
            "address": {
                "address1": "330 NORTH MAIN ST",
                "address2": "",
                "city": "CENTERVILLE",
                "province": "OH",
                "postalCode": "45459",
                "country": "US",
                "phone": "(937)433-0950"
            },
            "id": "2369713",
            "relevancy": 62.5
        }, {
            "_id": "2088776",
            "name": "GARITA VISION CENTER LLC",
            "websiteUrl": "",
            "address": {
                "address1": "7418 BERGENLINE AVE",
                "address2": "",
                "city": "NORTH BERGEN",
                "province": "NJ",
                "postalCode": "07047",
                "country": "US",
                "phone": "(201)868-1886"
            },
            "id": "2088776",
            "relevancy": 37.5
        }, {
            "_id": "2089940",
            "name": "OASIS VISION CENTER #1696",
            "websiteUrl": "",
            "address": {
                "address1": "7411 5TH AVE",
                "address2": "",
                "city": "BROOKLYN",
                "province": "NY",
                "postalCode": "11209",
                "country": "US",
                "phone": "(718)921-4827"
            },
            "id": "2089940",
            "relevancy": 37.5
        }, {
            "_id": "2099494",
            "name": "MOSES EYECARE CTR",
            "websiteUrl": "",
            "address": {
                "address1": "7414 INDIANAPOLIS BLVD",
                "address2": "",
                "city": "HAMMOND",
                "province": "IN",
                "postalCode": "46324",
                "country": "US",
                "phone": "(219)769-2606"
            },
            "id": "2099494",
            "relevancy": 37.5
        }, {
            "_id": "2119058",
            "name": "MURRELL, JOHN MD",
            "websiteUrl": "",
            "address": {
                "address1": "7411 WALLACE DR",
                "address2": "",
                "city": "AMARILLO",
                "province": "TX",
                "postalCode": "79106",
                "country": "US",
                "phone": "(806)351-1177"
            },
            "id": "2119058",
            "relevancy": 37.5
        }, {
            "_id": "2124919",
            "name": "PRIVOTT, MARK OD",
            "websiteUrl": "",
            "address": {
                "address1": "7415 NW 23RD ST",
                "address2": "",
                "city": "BETHANY",
                "province": "OK",
                "postalCode": "73008",
                "country": "US",
                "phone": "(405)495-5170"
            },
            "id": "2124919",
            "relevancy": 37.5
        }, {
            "_id": "2128612",
            "name": "GARREFFA, ANTHONY OD #0160",
            "websiteUrl": "",
            "address": {
                "address1": "7417 W MADISON ST",
                "address2": "FOREST PARK EYECARE",
                "city": "FOREST PARK",
                "province": "IL",
                "postalCode": "60130",
                "country": "US",
                "phone": "(708)366-2020"
            },
            "id": "2128612",
            "relevancy": 37.5
        }, {
            "_id": "2132135",
            "name": "YORIZANE, SHAW OD",
            "websiteUrl": "",
            "address": {
                "address1": "7411 N CEDAR AVE STE 102",
                "address2": "",
                "city": "FRESNO",
                "province": "CA",
                "postalCode": "93720",
                "country": "US",
                "phone": "(559)447-5522"
            },
            "id": "2132135",
            "relevancy": 37.5
        }, {
            "_id": "2132719",
            "name": "NATIONWIDE VISION CENTER",
            "websiteUrl": "",
            "address": {
                "address1": "21001 N TATUM BLVD #741570",
                "address2": "",
                "city": "PHOENIX",
                "province": "AZ",
                "postalCode": "85050",
                "country": "US",
                "phone": "(480)538-9811"
            },
            "id": "2132719",
            "relevancy": 37.5
        }, {
            "_id": "2139111",
            "name": "OPTI-MIN PA",
            "websiteUrl": "",
            "address": {
                "address1": "7415 WAYZATA BLVD",
                "address2": "WHITING CLINIC",
                "city": "ST LOUIS PARK",
                "province": "MN",
                "postalCode": "55426",
                "country": "US",
                "phone": "(952)475-3787"
            },
            "id": "2139111",
            "relevancy": 37.5
        }, {
            "_id": "2139235",
            "name": "WEST SUBURBAN OPTICAL #18785",
            "websiteUrl": "",
            "address": {
                "address1": "7411 W LAKE ST STE 1140",
                "address2": "",
                "city": "RIVER FOREST",
                "province": "IL",
                "postalCode": "60305",
                "country": "US",
                "phone": "(708)488-1972"
            },
            "id": "2139235",
            "relevancy": 37.5
        }, {
            "_id": "2143382",
            "name": "JACKSON, JOSEPH OD",
            "websiteUrl": "",
            "address": {
                "address1": "7417 W MADISON ST",
                "address2": "",
                "city": "FOREST PARK",
                "province": "IL",
                "postalCode": "60130",
                "country": "US",
                "phone": "(708)366-9700"
            },
            "id": "2143382",
            "relevancy": 37.5
        }, {
            "_id": "2143488",
            "name": "THE EYEGLASS FACTORY OUTLET CORP *W",
            "websiteUrl": "",
            "address": {
                "address1": "7410 W BOYNTON BEACH BLVD A6",
                "address2": "EYEGLASS FACTORY OUTLET",
                "city": "BOYNTON BEACH",
                "province": "FL",
                "postalCode": "33437",
                "country": "US",
                "phone": "(561)509-7433"
            },
            "id": "2143488",
            "relevancy": 37.5
        }, {
            "_id": "2151666",
            "name": "GREENHAVEN OPTOMETRY",
            "websiteUrl": "",
            "address": {
                "address1": "7410 GREENHAVEN DR",
                "address2": "STE 140",
                "city": "SACRAMENTO",
                "province": "CA",
                "postalCode": "95831",
                "country": "US",
                "phone": "(916)421-1278"
            },
            "id": "2151666",
            "relevancy": 37.5
        }, {
            "_id": "2151759",
            "name": "EYE CARE AT RHODES RANCH",
            "websiteUrl": "",
            "address": {
                "address1": "7415 S DURANGO DR STE A110",
                "address2": "VICTORIA L MAR OD",
                "city": "LAS VEGAS",
                "province": "NV",
                "postalCode": "89113",
                "country": "US",
                "phone": "(702)736-8883"
            },
            "id": "2151759",
            "relevancy": 37.5
        }, {
            "_id": "2200804",
            "name": "CONSULTATIVE EYE CARE #18265",
            "websiteUrl": "",
            "address": {
                "address1": "7415 WAYZATA BLVD STE 200",
                "address2": "DBA WHITING CLINIC",
                "city": "ST LOUIS PARK",
                "province": "MN",
                "postalCode": "55426",
                "country": "US",
                "phone": "(952)475-3787"
            },
            "id": "2200804",
            "relevancy": 37.5
        }, {
            "_id": "2201678",
            "name": "NATIONWIDE VISION CENTER #50",
            "websiteUrl": "",
            "address": {
                "address1": "21001 N TATUM BLVD #741570",
                "address2": "",
                "city": "PHOENIX",
                "province": "AZ",
                "postalCode": "85050",
                "country": "US",
                "phone": "(480)538-9811"
            },
            "id": "2201678",
            "relevancy": 37.5
        }, {
            "_id": "2867011",
            "name": "DR STEFIE RIBEIRO OD PC",
            "websiteUrl": null,
            "address": {
                "address1": "74137 PELE PL",
                "address2": "",
                "city": "PALM DESERT",
                "province": "CA",
                "postalCode": "92211",
                "country": "US",
                "phone": "(914)714-2444"
            },
            "id": "2867011",
            "relevancy": 37.5
        }, {
            "_id": "3335344",
            "name": "MODERN EYE CARE OF PORTLAND LLC",
            "websiteUrl": "",
            "address": {
                "address1": "7417 SW BEAVERTON HILLSDALE",
                "address2": "HWY STE 200",
                "city": "PORTLAND",
                "province": "OR",
                "postalCode": "97225",
                "country": "US",
                "phone": "(503)803-4134"
            },
            "id": "3335344",
            "relevancy": 37.5
        }, {
            "_id": "3601291",
            "address": {
                "address1": "7411 5TH AVE",
                "address2": "",
                "city": "BROOKLYN",
                "province": "NY",
                "postalCode": "11209",
                "country": "US",
                "phone": "(718)921-4827"
            },
            "name": "OASIS VISION CENTER, INC",
            "websiteUrl": null,
            "id": "3601291",
            "relevancy": 37.5
        }, {
            "_id": "3613405",
            "address": {
                "address1": "21001 N TATUM BLVD #741570",
                "address2": "",
                "city": "PHOENIX",
                "province": "AZ",
                "postalCode": "85050",
                "country": "US",
                "phone": "(000)000-0000"
            },
            "name": "NATIONWIDE VISION #3350",
            "websiteUrl": "",
            "id": "3613405",
            "relevancy": 37.5
        }, {
            "_id": "3969539",
            "address": {
                "address1": "7410 REMCON CIR STE K",
                "address2": "",
                "city": "EL PASO",
                "province": "TX",
                "postalCode": "79912",
                "country": "US",
                "phone": "(915)587-9400"
            },
            "name": "FAULKNOR, KEN OD",
            "websiteUrl": "",
            "id": "3969539",
            "relevancy": 37.5
        }, {
            "_id": "3988618",
            "address": {
                "address1": "74-10 BROADWAY 2ND FLR",
                "address2": "",
                "city": "ELMHURST",
                "province": "NY",
                "postalCode": "11373",
                "country": "US",
                "phone": "(914)685-5863"
            },
            "name": "DIAMOND DISTRICT CORNEAL PC",
            "websiteUrl": "",
            "id": "3988618",
            "relevancy": 37.5
        }, {
            "_id": "4066796",
            "address": {
                "address1": "7411 WALLACE BLVD",
                "address2": "",
                "city": "AMARILLO",
                "province": "TX",
                "postalCode": "79106",
                "country": "US",
                "phone": "(806)351-1870"
            },
            "name": "SOUTHWEST RETINA SPECIALISTS",
            "websiteUrl": "",
            "id": "4066796",
            "relevancy": 37.5
        }, {
            "_id": "4150011",
            "address": {
                "address1": "7415 SOUTHWEST PKWY",
                "address2": "BLDG 6 STE 300",
                "city": "AUSTIN",
                "province": "TX",
                "postalCode": "78735",
                "country": "US",
                "phone": "(512)328-7300"
            },
            "name": "LONE STAR EYE PLLC",
            "websiteUrl": "",
            "id": "4150011",
            "relevancy": 37.5
        }, {
            "_id": "4184107",
            "address": {
                "address1": "741-925 ACCESS RD A-25",
                "address2": "",
                "city": "HERLONG",
                "province": "CA",
                "postalCode": "96113",
                "country": "US",
                "phone": "(530)827-8000"
            },
            "name": "FCI HERLONG",
            "websiteUrl": "",
            "id": "4184107",
            "relevancy": 37.5
        }, {
            "_id": "4201132",
            "address": {
                "address1": "7411 N CEDAR AVE STE 102",
                "address2": "",
                "city": "FRESNO",
                "province": "CA",
                "postalCode": "93720",
                "country": "US",
                "phone": "(559)447-5522"
            },
            "name": "YORIZANE, SHAW OD",
            "websiteUrl": "",
            "id": "4201132",
            "relevancy": 37.5
        }, {
            "_id": "2091193",
            "name": "TOTAL EYECARE",
            "websiteUrl": "",
            "address": {
                "address1": "286 STATE RTE 23",
                "address2": "BRADFORD RIPPS OD",
                "city": "FRANKLIN",
                "province": "NJ",
                "postalCode": "7416",
                "country": "US",
                "phone": "(973)209-2020"
            },
            "id": "2091193",
            "relevancy": 12.5
        }, {
            "_id": "2101268",
            "name": "BRASSFIELD, ANJI OPT",
            "websiteUrl": "",
            "address": {
                "address1": "10920 S MEMORIAL DR",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)251-3937"
            },
            "id": "2101268",
            "relevancy": 12.5
        }, {
            "_id": "2101287",
            "name": "SCHWARTZ, DAVID L MD",
            "websiteUrl": "",
            "address": {
                "address1": "2000 S WHEELING STE 401",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74104",
                "country": "US",
                "phone": "(918)749-6461"
            },
            "id": "2101287",
            "relevancy": 12.5
        }, {
            "_id": "2101288",
            "name": "TULSA OPHTHALMOLOGY INC",
            "websiteUrl": "",
            "address": {
                "address1": "THE EYE INSTITUTE",
                "address2": "2000 S WHEELING AVE STE 403",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74104",
                "country": "US",
                "phone": "(918)742-5513"
            },
            "id": "2101288",
            "relevancy": 12.5
        }, {
            "_id": "2101289",
            "name": "GOLDBERG, MARC A MD",
            "websiteUrl": "",
            "address": {
                "address1": "2000 S WHEELING AVE STE 1010",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74104",
                "country": "US",
                "phone": "(918)584-4433"
            },
            "id": "2101289",
            "relevancy": 12.5
        }, {
            "_id": "2101291",
            "name": "VISIONS EYE CTR",
            "websiteUrl": "",
            "address": {
                "address1": "6837 F SOUTH MEMORIAL",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)254-1611"
            },
            "id": "2101291",
            "relevancy": 12.5
        }, {
            "_id": "2101292",
            "name": "TULSA EYE ASSOCIATES OPTICAL INC",
            "websiteUrl": "",
            "address": {
                "address1": "6465 S YALE STE 210",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)492-8455"
            },
            "id": "2101292",
            "relevancy": 12.5
        }, {
            "_id": "2101293",
            "name": "KIDS POINT OF VIEW #20313",
            "websiteUrl": "",
            "address": {
                "address1": "4606 EAST 67TH ST",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)481-2738"
            },
            "id": "2101293",
            "relevancy": 12.5
        }, {
            "_id": "2101294",
            "name": "TULSA EYE CONSULTANTS INC",
            "websiteUrl": "",
            "address": {
                "address1": "6606 S YALE STE 220",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)492-4122"
            },
            "id": "2101294",
            "relevancy": 12.5
        }, {
            "_id": "2101295",
            "name": "WEST, JERRY D OD",
            "websiteUrl": "",
            "address": {
                "address1": "7171 S YALE",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)492-0849"
            },
            "id": "2101295",
            "relevancy": 12.5
        }, {
            "_id": "2101296",
            "name": "LINDSEY, JUSTIN OD",
            "websiteUrl": "",
            "address": {
                "address1": "7171 S YALE STE 102",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)481-6630"
            },
            "id": "2101296",
            "relevancy": 12.5
        }, {
            "_id": "2101297",
            "name": "SNODGRASS, BLANE OD",
            "websiteUrl": "",
            "address": {
                "address1": "7408 S YALE AVE",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)492-8111"
            },
            "id": "2101297",
            "relevancy": 12.5
        }, {
            "_id": "2101298",
            "name": "BRIAN TIPTON OD",
            "websiteUrl": "",
            "address": {
                "address1": "10651 E 31ST ST",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74146",
                "country": "US",
                "phone": "(918)437-6360"
            },
            "id": "2101298",
            "relevancy": 12.5
        }, {
            "_id": "2101299",
            "name": "RINER EYECARE INC",
            "websiteUrl": "",
            "address": {
                "address1": "9720 E 31ST ST STE A1",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74146",
                "country": "US",
                "phone": "(918)270-4410"
            },
            "id": "2101299",
            "relevancy": 12.5
        }, {
            "_id": "2101369",
            "name": "KASTL, JUDY S OD",
            "websiteUrl": "",
            "address": {
                "address1": "5401 E 71ST ST",
                "address2": "STE 1",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)728-2020"
            },
            "id": "2101369",
            "relevancy": 12.5
        }, {
            "_id": "2101406",
            "name": "STOVER, JAMES C OD",
            "websiteUrl": "",
            "address": {
                "address1": "3906 S PEORIA",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74105",
                "country": "US",
                "phone": "(918)585-1523"
            },
            "id": "2101406",
            "relevancy": 12.5
        }, {
            "_id": "2101408",
            "name": "MACKEY, DR S A OPTOMETRIST PC",
            "websiteUrl": "",
            "address": {
                "address1": "8925 E 61 ST STE A",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)249-2020"
            },
            "id": "2101408",
            "relevancy": 12.5
        }, {
            "_id": "2101415",
            "name": "EYEPLUS OPTICAL INC",
            "websiteUrl": "",
            "address": {
                "address1": "1661 S HARVARD AVE",
                "address2": "STE B",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74112",
                "country": "US",
                "phone": "(918)748-3620"
            },
            "id": "2101415",
            "relevancy": 12.5
        }, {
            "_id": "2110739",
            "name": "WOLF II, CURTIS V MD PC",
            "websiteUrl": "",
            "address": {
                "address1": "UTICA EYE CARE",
                "address2": "1145 S UTICA AVE STE 362",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74104",
                "country": "US",
                "phone": "(918)592-3937"
            },
            "id": "2110739",
            "relevancy": 12.5
        }, {
            "_id": "2110742",
            "name": "TULSA EYE CENTER PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "4415 SOUTH HARVARD AVE #120",
                "address2": "20/20 OPTICAL",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)745-2020"
            },
            "id": "2110742",
            "relevancy": 12.5
        }, {
            "_id": "2110743",
            "name": "GRAEFE, GERALD OD #15535",
            "websiteUrl": "",
            "address": {
                "address1": "2310 S GARNETT RD",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74129",
                "country": "US",
                "phone": "(918)664-1180"
            },
            "id": "2110743",
            "relevancy": 12.5
        }, {
            "_id": "2110744",
            "name": "LENS SHOP",
            "websiteUrl": "",
            "address": {
                "address1": "3171-A S 129TH E AVE 304",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74134",
                "country": "US",
                "phone": "(918)747-5116"
            },
            "id": "2110744",
            "relevancy": 12.5
        }, {
            "_id": "2110745",
            "name": "RAHME-FAIRCHILD, VICTORIA OD",
            "websiteUrl": "",
            "address": {
                "address1": "OPTIQUE PROF EYE CARE",
                "address2": "3338 E 51ST",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)743-9918"
            },
            "id": "2110745",
            "relevancy": 12.5
        }, {
            "_id": "2110746",
            "name": "SWEET, CAROL LYNN OD",
            "websiteUrl": "",
            "address": {
                "address1": "4867 S SHERIDAN STE 704A",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74145",
                "country": "US",
                "phone": "(918)491-7396"
            },
            "id": "2110746",
            "relevancy": 12.5
        }, {
            "_id": "2110747",
            "name": "KEATHLEY, BOB OPT",
            "websiteUrl": "",
            "address": {
                "address1": "6025 S SHERIDAN RD",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74145",
                "country": "US",
                "phone": "(918)494-2671"
            },
            "id": "2110747",
            "relevancy": 12.5
        }, {
            "_id": "2114434",
            "name": "BUDGET OPTICAL",
            "websiteUrl": "",
            "address": {
                "address1": "3402 E PINE ST",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74115",
                "country": "US",
                "phone": "(918)883-2020"
            },
            "id": "2114434",
            "relevancy": 12.5
        }, {
            "_id": "2115623",
            "name": "HICKS BRUNSON UTICA SQ",
            "websiteUrl": "",
            "address": {
                "address1": "2020 UTICA SQUARE",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74114",
                "country": "US",
                "phone": "(918)743-6478"
            },
            "id": "2115623",
            "relevancy": 12.5
        }, {
            "_id": "2119025",
            "name": "ECONOMOU, ANTHONY",
            "websiteUrl": "",
            "address": {
                "address1": "220 WEST 71ST ST",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74132",
                "country": "US",
                "phone": "(918)747-7799"
            },
            "id": "2119025",
            "relevancy": 12.5
        }, {
            "_id": "2119026",
            "name": "TRIAD EYE MEDICAL CLINIC",
            "websiteUrl": "",
            "address": {
                "address1": "6140 S MEMORIAL",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)252-2020"
            },
            "id": "2119026",
            "relevancy": 12.5
        }, {
            "_id": "2119264",
            "name": "ROZELL, VANESSA OD",
            "websiteUrl": "",
            "address": {
                "address1": "4107 S YALE STE 147",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)627-1556"
            },
            "id": "2119264",
            "relevancy": 12.5
        }, {
            "_id": "2124886",
            "name": "ZOELLNER, ROBERT OD #1",
            "websiteUrl": "",
            "address": {
                "address1": "3016 S HARVARD AVE",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74114",
                "country": "US",
                "phone": "(918)749-2020"
            },
            "id": "2124886",
            "relevancy": 12.5
        }, {
            "_id": "2124887",
            "name": "PRESLEY, RICHARD OD",
            "websiteUrl": "",
            "address": {
                "address1": "EYEMART EXPRESS #18",
                "address2": "7472 E ADMIRAL PL",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74115",
                "country": "US",
                "phone": "(918)241-5700"
            },
            "id": "2124887",
            "relevancy": 12.5
        }, {
            "_id": "2124888",
            "name": "FREE, DAVID OD",
            "websiteUrl": "",
            "address": {
                "address1": "1223 S PEORIA",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74120",
                "country": "US",
                "phone": "(918)582-7346"
            },
            "id": "2124888",
            "relevancy": 12.5
        }, {
            "_id": "2124889",
            "name": "MIDTOWN EYE & LASER CENTER LLC",
            "websiteUrl": "",
            "address": {
                "address1": "1701 S PEORIA AVE STE 200",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74120",
                "country": "US",
                "phone": "(918)599-0202"
            },
            "id": "2124889",
            "relevancy": 12.5
        }, {
            "_id": "2124891",
            "name": "MOORE, FRANK INC #14650",
            "websiteUrl": "",
            "address": {
                "address1": "8004 S MEMORIAL DR",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)461-2367"
            },
            "id": "2124891",
            "relevancy": 12.5
        }, {
            "_id": "2124892",
            "name": "RAINWATER, WESLEY OD PC",
            "websiteUrl": "",
            "address": {
                "address1": "8122 A S MEMORIAL DR",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)254-0447"
            },
            "id": "2124892",
            "relevancy": 12.5
        }, {
            "_id": "2124893",
            "name": "EYECARE OPTICAL LLC",
            "websiteUrl": "",
            "address": {
                "address1": "10010 E 81ST ST STE 101",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)250-4554"
            },
            "id": "2124893",
            "relevancy": 12.5
        }, {
            "_id": "2124894",
            "name": "LONG, JEFF M DR ENTERPRISES PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "10920 S MEMORIAL DR",
                "address2": "DR J LONGS CHILDREN & FAMILY",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)369-7272"
            },
            "id": "2124894",
            "relevancy": 12.5
        }, {
            "_id": "2124895",
            "name": "WOFFORD, MATTHEW OD",
            "websiteUrl": "",
            "address": {
                "address1": "4002-A S YALE AVE",
                "address2": "EYEMART EXPRESS",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)664-1500"
            },
            "id": "2124895",
            "relevancy": 12.5
        }, {
            "_id": "2124897",
            "name": "COOK, PHILLIP L OD #6935",
            "websiteUrl": "",
            "address": {
                "address1": "4520 HARVARD AVE STE 150",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)747-1578"
            },
            "id": "2124897",
            "relevancy": 12.5
        }, {
            "_id": "2124915",
            "name": "ZOELLNER, ROBERT OD",
            "websiteUrl": "",
            "address": {
                "address1": "6999 S MEMORIAL",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)461-2020"
            },
            "id": "2124915",
            "relevancy": 12.5
        }, {
            "_id": "2124923",
            "name": "138 MDG",
            "websiteUrl": "",
            "address": {
                "address1": "9100 E 46TH ST N",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74115",
                "country": "US",
                "phone": "(918)833-7441"
            },
            "id": "2124923",
            "relevancy": 12.5
        }, {
            "_id": "2124925",
            "name": "HOLMES, JULIE A OD PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "9 E 4TH ST STE 105",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74103",
                "country": "US",
                "phone": "(918)935-3500"
            },
            "id": "2124925",
            "relevancy": 12.5
        }, {
            "_id": "2124932",
            "name": "LONG, JEFF M DR ENTERPRISES PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "316 W 71ST ST",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74132",
                "country": "US",
                "phone": "(918)794-2020"
            },
            "id": "2124932",
            "relevancy": 12.5
        }, {
            "_id": "2124936",
            "name": "GROVES, STEPHEN W MD PC",
            "websiteUrl": "",
            "address": {
                "address1": "HIS VISION EYECARE AND EYEWEAR",
                "address2": "9110 S SHERIDAN RD",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)388-3949"
            },
            "id": "2124936",
            "relevancy": 12.5
        }, {
            "_id": "2124939",
            "name": "BIGHEART MORGANS PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "TWENTYTWENTY EYECARE",
                "address2": "7408 S YALE AVE",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74136",
                "country": "US",
                "phone": "(918)794-6700"
            },
            "id": "2124939",
            "relevancy": 12.5
        }, {
            "_id": "2124945",
            "name": "MCDANIELS PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "LOOK EYECARE & EYEWEAR",
                "address2": "3746 S PEORIA AVE",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74105",
                "country": "US",
                "phone": "(918)992-5337"
            },
            "id": "2124945",
            "relevancy": 12.5
        }, {
            "_id": "2124949",
            "name": "LOVING EYECARE",
            "websiteUrl": "",
            "address": {
                "address1": "7104 S SHERIDAN RD",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74105",
                "country": "US",
                "phone": "(918)496-2900"
            },
            "id": "2124949",
            "relevancy": 12.5
        }, {
            "_id": "2124951",
            "name": "EYE CARE FOR TULSA",
            "websiteUrl": "",
            "address": {
                "address1": "3906 S PEORIA AVE",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74105",
                "country": "US",
                "phone": "(918)585-1523"
            },
            "id": "2124951",
            "relevancy": 12.5
        }, {
            "_id": "2124953",
            "name": "TULSA HILLS EYE ASSOCIATES PLLC",
            "websiteUrl": "",
            "address": {
                "address1": "7466 S OLYMPIA AVE W",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74132",
                "country": "US",
                "phone": "(918)447-0080"
            },
            "id": "2124953",
            "relevancy": 12.5
        }, {
            "_id": "2124957",
            "name": "THE LASIK VISION INSTITUTE INC",
            "websiteUrl": "",
            "address": {
                "address1": "4815 S HARVARD AVE STE 128",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74135",
                "country": "US",
                "phone": "(918)874-1902"
            },
            "id": "2124957",
            "relevancy": 12.5
        }, {
            "_id": "2124959",
            "name": "SAMS CLUB OPTICAL #8263",
            "websiteUrl": "",
            "address": {
                "address1": "4420 S SHERIDAN RD",
                "address2": "DELIVER TO VISION CENTER",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74145",
                "country": "US",
                "phone": "(918)627-1443"
            },
            "id": "2124959",
            "relevancy": 12.5
        }, {
            "_id": "2124961",
            "name": "ROBERSON, GERALD OD",
            "websiteUrl": "",
            "address": {
                "address1": "6837-G S MEMORIAL DR",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)839-1234"
            },
            "id": "2124961",
            "relevancy": 12.5
        }, {
            "_id": "2124963",
            "name": "STANTON OPTICAL #58",
            "websiteUrl": "",
            "address": {
                "address1": "7030 S SHERIDAN AVE STE 101",
                "address2": "",
                "city": "TULSA",
                "province": "OK",
                "postalCode": "74133",
                "country": "US",
                "phone": "(918)550-5297"
            },
            "id": "2124963",
            "relevancy": 12.5
        }]
    });
});

app.get('/api/models/n', (req, res) => {
    let data = {
        "success": true,
        "models": [
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity sphere"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(4) Biofinity",
                "id": "601450"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity sphere"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(2) Biofinity",
                "id": "601454"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity Energys Sphere"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(4) Biofinity Energys",
                "id": "601458"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity Energys Sphere"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(2) Biofinity Energys",
                "id": "601461"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity multifocal"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(4) Biofinity multifocal",
                "id": "601464"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity multifocal"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(2) Biofinity multifocal",
                "id": "601468"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity toric"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(4) Biofinity toric",
                "id": "601472"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity toric"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(2) Biofinity toric",
                "id": "601476"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(8) clariti 1 day 90-pk",
                "id": "601482"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day 90-pk",
                "id": "601486"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(24) clariti 1 day multifocal 30-pk",
                "id": "601490"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(8) clariti 1 day multifocal 90-pk",
                "id": "601492"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day multifocal 30-pk",
                "id": "601496"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day multifocal 90-pk",
                "id": "601498"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(24) clariti 1 day toric 30-pk",
                "id": "601502"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(8) clariti 1 day toric 90-pk",
                "id": "601506"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day toric 30-pk",
                "id": "601509"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day toric 90-pk",
                "id": "601513"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(4) MyDay 180-pk",
                "id": "601516"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(8) MyDay 90-pk",
                "id": "601517"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(2) MyDay 180-pk",
                "id": "601519"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(4) MyDay 90-pk",
                "id": "601520"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay toric"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(8) MyDay toric 90-pk",
                "id": "601522"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay toric"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(4) MyDay toric 90-pk",
                "id": "601523"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(24) clariti 1 day 30-pk",
                "id": "717722"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day 30-pk",
                "id": "717723"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay Multifocal"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(4) MyDay Multifocal 90-pk",
                "id": "1673980"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay Multifocal"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(8) MyDay Multifocal 90-pk",
                "id": "1673981"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(2) clariti 1 day multifocal 90-pk",
                "id": "1727232"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(2) clariti 1 day toric 90-pk",
                "id": "1727245"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(2) clariti 1 day 90-pk",
                "id": "1727254"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(6) clariti 1 day 30-pk",
                "id": "1728928"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(6) clariti 1 day multifocal 30-pk",
                "id": "1728929"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(6) clariti 1 day toric 30-pk",
                "id": "1728930"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day 90-pk (semi-annual supply)",
                "id": "1892163"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day sphere"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day 30-pk (semi-annual supply)",
                "id": "1892164"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(8) MyDay Energys 90-pk",
                "id": "1979818"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "MyDay sphere"
                },
                "brand": {
                    "id": "1785",
                    "name": "MyDay"
                },
                "name": "(4) MyDay Energys 90-pk",
                "id": "1979819"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day toric 90-pk (semi-annual supply)",
                "id": "1979823"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day toric"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day toric 30-pk (semi-annual)",
                "id": "1980589"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(4) clariti 1 day multifocal 90-pk (semi-annual)",
                "id": "1980588"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "clariti 1 day multifocal"
                },
                "brand": {
                    "id": "1784",
                    "name": "clariti 1 day"
                },
                "name": "(12) clariti 1 day multifocal 30-pk (semi-annual)",
                "id": "1980590"
            },
            {
                "serialNumbers": {
                    "required": false,
                    "format": "",
                    "validateFormat": false
                },
                "productLine": {
                    "name": "Biofinity sphere"
                },
                "brand": {
                    "id": "1786",
                    "name": "Biofinity"
                },
                "name": "(4) Biofinity XR",
                "id": "2153942"
            }
        ]
    };

    let list = [];
    data.models.map((item)=>{
        let i =0;
        for( ;list.length > i;i++ ){
            if(list[i].name === item.productLine.name){
                list[i].items.push({name: item.name, id: item.id});
                break;
            }
        }
        if(i === list.length){
            list.push({name: item.productLine.name, items:[{name: item.name, id: item.id}]});
        }
    });

    res.json(list);
});

// For all other routes, serve the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app_ui', 'index.html'));
});

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


/*async function selectDate(date: number, dateToSelect: string) {
    await page.click(".SingleDatePicker_1 .SingleDatePickerInput_calendarIcon_1")

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    // let dateToSelect: string = "May 2019";
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log("this month? " + thisMonth);
    while (await mmYY.textContent() != dateToSelect) {
        if (thisMonth) {
            await prev.click();
        } else {
            await next.click();
        }
    }*/

app.get('/api/login', async (req, res) => {

    try {
        const browser = await puppeteer.launch({
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            headless: false, defaultViewport: false, args: [
                //"--no-sandbox", // Add this flag to disable the sandbox
                //"--disable-setuid-sandbox",
                "--enable-blink-features=WebCodecs",
                "--enable-experimental-web-platform-features",
                "--file-handling-api",
                "--enable-features=MediaFoundationAsyncH264Encoding"
            ]
        });
        const page = await browser.newPage();

        await page.setJavaScriptEnabled(true);
        await page.setExtraHTTPHeaders({'Accept-Language': 'en'});
        // You can use any UserAgent you want
        //await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36');


        await page.goto('https://myaccount.coopervisionpromotions.com/login', {timeout: 30000});
        //await page.goto('http://220.100.55.191:5500/test.html', {timeout: 30000});

        await page.waitForSelector('.form-container__form');


        await page.type('#login-email-address', 'trickbumper-palm@yahoo.com');
        await page.type('#login-password', 'Char#1sm');

        // Submit the form
        await page.click('#form-container__submit');
        //await page.waitForNavigation();
        //const form = await page.waitForSelector('.form-container__form');
        await page.waitForNavigation();

        const wt = await page.waitForSelector('.alert-warning', {timeout: 5000}).catch(e => {
        });

        console.log(!!wt)
        if (!wt) {
            console.log("Login login");

            //await page.waitForSelector('#select-claimant', { timeout: 5000 });


            page.click('#select-claimant');

            await page.waitForSelector('.modal-body', {visible: true});
            page.click('#form-container__submit');

            await page.waitForNavigation();

            await page.waitForSelector('#input-offer-code');
            await page.type('#input-offer-code', 'NWCV-2H23');

            await page.click('.btn-primary');

            await page.waitForNavigation();

            //const next_1 = await page.$('.btn-next');
            //next_1.click();
            await page.click('.intro .btn-next');

            await page.waitForSelector('section.invoice', {visible: true});

            const filePath = path.resolve( __dirname , 'certificate.pdf');
            console.log(filePath);
            //const element = await page.$('#upload-document');
            //await element.uploadFile(filePath);
            //await element.evaluate(upload => upload.dispatchEvent(new Event('change', { bubbles: true })));*/
            const [fileChoosers] = await Promise.all([
                page.waitForFileChooser(),
                page.click('.invoice button.document-upload-button.btn.btn-success'),
                page.waitForTimeout(1000)
            ]);
            await  fileChoosers.accept([filePath]);

            await page.waitForSelector('.invoice .document-upload-btn-next:not([disabled])');
            await page.click('.invoice .document-upload-btn-next');




            //Next step 2
            await page.waitForSelector('.invoice #documentAlreadyUploaded');
            await page.click('.invoice #documentAlreadyUploaded');
            await page.waitForSelector('.invoice .document-upload-btn-next:not([disabled])');
            await page.click('.invoice .document-upload-btn-next');

            //Next step 3
            await page.waitForSelector('.invoice #documentAlreadyUploaded');
            await page.click('.invoice #documentAlreadyUploaded');
            await page.waitForSelector('.invoice .document-upload-btn-next:not([disabled])');
            await page.click('.invoice .document-upload-btn-next');

            //Next step 4
            await page.waitForSelector('.invoice #documentAlreadyUploaded');
            await page.click('.invoice #documentAlreadyUploaded');
            await page.waitForSelector('.invoice .btn-next:not([disabled])');
            await page.click('.invoice .btn-next');


            await page.waitForSelector('section.purchase');
            await page.type('section.purchase #dealer', "EYE ASSOC OF NM #71 - 5200 EUBANK NE STE A-4 DR TIMOTHY JOHNSON OD, ALBUQUERQUE NM 87111");
            await page.waitForSelector(".ta-suggestion-list .ta-suggestion-list-results .ta-suggestion");
            await page.click('.ta-suggestion-list .ta-suggestion-list-results .ta-suggestion:first-child');
            await page.type('section.purchase #patientFirstName', "Charlie 1");
            await page.type('section.purchase #patientLastName', "Smith 1");

           // await page.$eval('section.purchase #eyeExamDate',(e) => {e.removeAttribute("readonly"); e.value="2023-10-02"});

           // await page.$eval('section.purchase #dateOfPurchase',(e) => {e.removeAttribute("readonly"); e.value="2023-10-02"});
            //await page.type('section.purchase #eyeExamDate', "2023-11-02");
            //await page.type('section.purchase #dateOfPurchase', "2023-11-03");

            //const dateOfPurchase=await page.$('section.purchase #dateOfPurchase');
            //dateOfPurchase.value='2023-11-03';


            await page.click('.purchase-eyeExamDate  .SingleDatePicker_1 .SingleDatePickerInput_calendarIcon_1');
            await page.waitForSelector('.purchase-eyeExamDate .SingleDatePicker_picker', {visible: true});
            const prev_e = await page.$(".purchase-eyeExamDate .SingleDatePicker_1 .DayPickerNavigation_button:first-child");




            let mmYY = await page.$('.purchase-eyeExamDate .CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption strong');
            let element = await page.evaluate(element => element.textContent, mmYY);

            await page.waitForTimeout(200);
            while (element !== 'November 2023'){

                await prev_e.click();
                await page.waitForTimeout(500);
                mmYY = await page.$('.purchase-eyeExamDate .CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption strong');
                element = await page.evaluate(element => element.textContent, mmYY);
                console.log(element);
            }
            if(element === 'November 2023')
                await page.click(".purchase-eyeExamDate td[aria-label*='November 11, 2023']");





            await page.waitForTimeout(200);




            await page.click('.purchase-dateOfPurchase .SingleDatePicker_1 .SingleDatePickerInput_calendarIcon_1');
            await page.waitForSelector('.purchase-dateOfPurchase .SingleDatePicker_picker', {visible: true});

            const prev = await page.$(".purchase-dateOfPurchase .SingleDatePicker_1 .DayPickerNavigation_button:first-child");
            const next = await page.$(".purchase-dateOfPurchase .SingleDatePicker_1 .DayPickerNavigation_button:last-child");



            mmYY = await page.$('.purchase-dateOfPurchase .CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption strong');
            element = await page.evaluate(element => element.textContent, mmYY);

            await page.waitForTimeout(200);
            while (element !== 'November 2023'){

                await prev.click();
                await page.waitForTimeout(500);
                mmYY = await page.$('.purchase-dateOfPurchase .CalendarMonthGrid_month__horizontal:not(.CalendarMonthGrid_month__hidden) .CalendarMonth_caption strong');
                element = await page.evaluate(element => element.textContent, mmYY);
                console.log(element);
            }
            if(element === 'November 2023')
                await page.click(".purchase-dateOfPurchase  td[aria-label*='November 16, 2023']");


            await page.waitForTimeout(200);

            await page.type('section.purchase #invoiceNumber', "BS#20231103");


            await page.type('section.purchase ul.product-list #purchasePrice-1', "103");

            await page.click('section.purchase ul.product-list li:first-child .component-dropdown-selection');
            await page.waitForSelector('section.purchase ul.product-list li:first-child .component-dropdown-list button[data-value="(4) Biofinity XR"]', {visible: true});

            await page.click('section.purchase ul.product-list li:first-child .component-dropdown-list button[data-value="(4) Biofinity XR"]');

            await page.click('section.purchase button.product-add');


            await page.waitForSelector('section.purchase .product-list #purchasePrice-2', {visible: true});

            await page.type('section.purchase .product-list #purchasePrice-2', "106");
            await page.click('section.purchase ul.product-list li:last-child .component-dropdown-selection');

            await page.waitForSelector('section.purchase ul.product-list li:last-child .component-dropdown-list button[data-value="(4) Biofinity toric"]', {visible: true});
            await page.click('section.purchase ul.product-list li:last-child .component-dropdown-list button[data-value="(4) Biofinity toric"]');



            await page.click('section.purchase .btn-next');


            await page.waitForSelector("section.program-selection");


            await page.click('section.program-selection .row:first-child button.btn-select');
            await page.click('section.program-selection .btn-next');




            await page.waitForSelector("section.fulfillment");
            await page.click("section.fulfillment .btn-next");


            await page.waitForSelector("section.review");
            await page.click("section.review .btn-next");


            await page.waitForSelector("section.survey");

            await page.click("section.survey input[name=\"questions.0.answers\"][value=\"No\"]");

            await page.click("section.survey input[name=\"questions.1.answers\"][value=\"Yes\"]");


            await page.click("section.survey .survey-question-2-questions-2-answers .component-dropdown-selection");

            await page.waitForSelector("section.survey .survey-question-2-questions-2-answers .component-dropdown-list");
            await page.click("section.survey .survey-question-2-questions-2-answers .component-dropdown-list button[data-value='ACUVUE® VITA®']");


            await page.click("section.survey .survey-question-3-questions-3-answers .component-dropdown-selection");

            await page.waitForSelector("section.survey .survey-question-3-questions-3-answers .component-dropdown-list");
            await page.click("section.survey .survey-question-3-questions-3-answers .component-dropdown-list button[data-value='25-34']");

            await page.click("section.survey .survey-question-4-questions-4-answers .component-dropdown-selection");

            await page.waitForSelector("section.survey .survey-question-4-questions-4-answers .component-dropdown-list");
            await page.click("section.survey .survey-question-4-questions-4-answers .component-dropdown-list button[data-value='Male']");


            await page.click("section.survey .btn-next");



            await page.waitForSelector("section.confirmation");
            await page.click('section.confirmation input[name="legalAgreement"]');
            await page.click('section.confirmation input[name="privacyAgreement"]');



        } else {
            console.log("Login failed");
        }
        res.json({
            "success": true,
            "dealers": []
        });
        // Navigate to a web page
    } catch (e) {
        console.log(e)
        res.json({
            "success": true,
            "dealers": []
        });
    }

});





app.get('/api/file', async (req, res) => {


    const browser = await puppeteer.launch({
        headless: false, defaultViewport: false, args: [
            "--no-sandbox", // Add this flag to disable the sandbox
            "--disable-setuid-sandbox",
        ]
    });
    const page = await browser.newPage();
    //await page.goto('https://myaccount.coopervisionpromotions.com/login', {timeout: 30000});
    await page.goto('http://220.100.55.191:5500/test.html', {timeout: 30000});

    // Set an array of file paths to the input element
    const filePaths = [
        "C:\\Users\\ahosa\\Downloads\\health-history-form-03.pdf"
    ];

    const fileInput = await page.$('input[type="file"]');

    // Upload each file
    for (const filePath of filePaths) {
        await fileInput.uploadFile(filePath);
    }


    res.json({
        "success": true,
        "dealers": []
    });

});

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
});