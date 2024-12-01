import { Paper, ContentAssessor } from "yoastseo";
import { default as AbstractResearcher } from "yoastseo/build/languageProcessing/AbstractResearcher";

const yoastSeoAnalysisResult = () => {
	const content = DocumentApp.getActiveDocument().getBody().getText();
	const title = DocumentApp.getActiveDocument().getName();
	const paper = new Paper(content, {
		title,
		keyphrase: 'wordpress',
		locale: 'en_US',
	});

	const researcher = new AbstractResearcher( paper );

	// Create assessor and run assessments
	const assessor = new ContentAssessor(researcher);
	assessor.assess(paper);
	const results = assessor.getValidResults();

	return results;
};

const addAnalysisResultToDocument = () => {
	const result = yoastSeoAnalysisResult();
	const document = DocumentApp.getActiveDocument();
	const body = document.getBody();

	const analysisResult = JSON.stringify(result);

	body.appendParagraph(analysisResult);
};

export const showSideAppScreen = () => {
	// Add a custom menu to the Google Docs UI.
	const template = HtmlService.createTemplateFromFile('index');
	const htmlOutput = template.evaluate().setTitle('YoastSEO - Writing Assistant');
	DocumentApp.getUi().showSidebar(htmlOutput);

	addAnalysisResultToDocument();
};
