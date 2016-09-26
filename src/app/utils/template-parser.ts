import { GridData } from "../grid/grid-data"
 
export class TemplateParser {

    errorMessages: string[];
    warningMessages: string[];
    templateData : GridData;
    templateEngineId = 0;
    normalAds = [        
			{ "title": "Sprint® Family Share Pack", "description": "Switch & Get 10GB for 4 Lines, Only $100 per Month. Limited Time Offer." },
			{ "title": "Mazda® UK Official Site", "description": "Search. Outside the box. The only marketplace that lets you bid by device type." },
			{ "title": "Macy's® - Official Site", "description": "Save on Apparel, Home Items & More Find Everything You Need at Macy's!" },
			{ "title": "Compare Subaru Vehicles", "description": "See Subaru's Model Lineup. Compare Sedans, Crossovers, SUVs and More." },
            { "title": "Sprint® Family Share Pack", "description": "Switch & Get 10GB for 4 Lines, Only $100 per Month. Limited Time Offer." },
			{ "title": "Mazda® UK Official Site", "description": "Search. Outside the box. The only marketplace that lets you bid by device type." },
			{ "title": "Macy's® - Official Site", "description": "Save on Apparel, Home Items & More Find Everything You Need at Macy's!" },
			{ "title": "Compare Subaru Vehicles", "description": "See Subaru's Model Lineup. Compare Sedans, Crossovers, SUVs and More." },
            { "title": "Sprint® Family Share Pack", "description": "Switch & Get 10GB for 4 Lines, Only $100 per Month. Limited Time Offer." },
			{ "title": "Mazda® UK Official Site", "description": "Search. Outside the box. The only marketplace that lets you bid by device type." },
			{ "title": "Macy's® - Official Site", "description": "Save on Apparel, Home Items & More Find Everything You Need at Macy's!" },
			{ "title": "Compare Subaru Vehicles", "description": "See Subaru's Model Lineup. Compare Sedans, Crossovers, SUVs and More." },
			{ "title": "Ad for Unit Test", "description": "For the brave souls who get this far: You are the chosen ones." }
	]
    longAds =[
		// for MOM's ad
		{ "title": "1. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site1", "description": "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "2. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site2", "description": "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "3. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site3", "description": "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "4. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site4", "description": "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "5. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site5", "description": "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "6. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site6", "description": "6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "7. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site7", "description": "7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "8. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site8", "description": "8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "9. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site9", "description": "9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" },
		{ "title": "10. Affordable, amazing flying car Mazda®. Drive into the furute USA Official Site10", "description": "10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend diam et nisl pellentesque, eget dignissim nunca lacinia. Fusce sagit" } 
	]

    keywords = ['online_degree', 'jcpenney', 'delta', 'car_insurance'];

    beginTemplateValidation (template: GridData){
        this.errorMessages = [];
        this.warningMessages = [];

        this.templateData = template;

        this.templateEngineId = parseInt(this.getTemplateEngine());

        let parsedHtml = null;

        switch (this.templateEngineId) {
            case 0:
                parsedHtml = this.parseUsingStringInterpolation();
                break;
            case 10:
                parsedHtml = this.parseUsingHandleBars();
                break;
            default:
                break;
        }
        return parsedHtml;



    }
    parseUsingStringInterpolation(){
        let ads = this.normalAds;
        try{
            if(this.templateData.LONG_ADCOPY === 1){
                ads = this.longAds;
            }else if(this.templateData.LONG_ADCOPY === 0){
                ads = this.normalAds;
            }else{
                this.errorMessages.push("Selected template is missing value for 'LongAd Copy'");
                return null;
            }

        }catch(e){
            return null;
        }
        
        let adCount = this.templateData.NUMBER_OF_ADS;
        let html = this.templateData.HTML_TEXT;
        for (var n = 1; n <= adCount; n++) {
            html = this.replaceAll(html, '${title' + n.toString() + '}', ads[n - 1].title);
            html = this.replaceAll(html, '${clickUrl' + n.toString() + '}', 'http://www.admarketplace.com/?test=' + n.toString());
            html = this.replaceAll(html, '${displayUrl' + n.toString() + '}', 'www' + n.toString() + '.admarketplace.com/hello-world');
            html = this.replaceAll(html, '${description' + n.toString() + '}', ads[n - 1].description);
            html = this.replaceAll(html, '${thumbUrl' + n.toString() + '}', '/assets/images/' + this.keywords[n - 1] + '.jpg');
            html = this.replaceAll(html, '${pubPixel' + n.toString() + '}', '/assets/images/tracking.gif?ad=' + n.toString() + '&_' + (new Date()).getTime().toString());
        }
        return html;
    }
    parseUsingHandleBars (){
        
    }
    getTemplateEngine (){
        try{        
            return this.templateData.TEMPLATE_ENGINE_ID;
        }catch (e){
            return null;
        }
    }
    replaceAll(input, fnd, rpl) {
		return input.replace(new RegExp(fnd.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g'), rpl);
	}
}
