import { Paper, ContentAssessor } from "yoastseo";
import { default as AbstractResearcher } from "yoastseo/build/languageProcessing/AbstractResearcher";

const yoastSeoAnalysisResult = () => {
	const content = DocumentApp.getActiveDocument().getBody().getText();
	const title = DocumentApp.getActiveDocument().getName();
	
	// Create a new paper
	const paper = new Paper(content, {
		title,
		keyphrase: 'wordpress',
		locale: 'en_US',
	});

	// Create a researcher
	const researcher = new AbstractResearcher( paper );

	// Create assessor and run assessments
	const assessor = new ContentAssessor(researcher);
	assessor.assess(paper);
	const results = assessor.getValidResults();

	return results;
};

const formattedResults = (results) => {
	const formattedResult = results.map((result) => {
		return {
			text: result.text,
			score: result.score,
		};
	});

	return JSON.stringify(formattedResult);
};

export const analysisResult = () => {
	const results = yoastSeoAnalysisResult();
	const analysisResult = formattedResults(results);

	return analysisResult;
};

export const showSideAppScreen = () => {
	// Add a custom menu to the Google Docs UI.
	const template = HtmlService.createTemplateFromFile('index');
	const htmlOutput = template.evaluate().setTitle('YoastSEO - Writing Assistant');
	DocumentApp.getUi().showSidebar(htmlOutput);
};

export const updateSidebar = () => {
	const template = HtmlService.createTemplateFromFile('index');
	const htmlOutput = template.evaluate().setTitle('YoastSEO - Writing Assistant');
	DocumentApp.getUi().showSidebar(htmlOutput);
};
