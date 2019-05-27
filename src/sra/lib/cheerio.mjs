import cheerio  from "cheerio";

export function printElement(el: CheerioElement) {
    const $ : any = cheerio.load(el);
    console.log($.html());
}
