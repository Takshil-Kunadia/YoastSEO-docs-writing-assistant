import { Paper, ContentAssessor, SeoAssessor } from "yoastseo";
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

	// Create content assessor and run assessments
	const contentAssessor = new ContentAssessor(researcher);
	contentAssessor.assess(paper);
	const contentAnalysisResults = contentAssessor.getValidResults();

	// Create SEO assessor and run assessments
	const seoAssessor = new SeoAssessor(researcher);
	seoAssessor.assess(paper);
	const seoAnalysisResults = seoAssessor.getValidResults();

	return {
		content: contentAnalysisResults,
		seo: seoAnalysisResults,
	};
};

const formatContentResults = (results) => {
	const formattedResult = results.map((result) => {
		return {
			text: result.text,
			score: result.score,
		};
	});

	return JSON.stringify(formattedResult);
};

const formatSeoResults = (results) => {
	Logger.log('formatSeoResults',results);
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
	const contentAnalysisResult = formatContentResults(results.content);
	const seoAnalysisResult = formatSeoResults(results.seo);

	return {
		content: contentAnalysisResult,
		seo: seoAnalysisResult,
	};
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
