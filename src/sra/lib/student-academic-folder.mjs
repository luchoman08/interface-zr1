import cheerio from "cheerio";
export function extractStudentResolution(html: any /* string */) {
    const $ = cheerio.load(html);
    return $('input[name="hia_rep_codigo"]').first().attr('value');
}