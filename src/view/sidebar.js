import { Paper, ContentAssessor, SeoAssessor } from "yoastseo";
import { default as Researcher } from "yoastseo/build/languageProcessing/languages/en/Researcher";
import { default as getFleschReadingScore } from "yoastseo/build/languageProcessing/researches/getFleschReadingScore";

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
	const researcher = new Researcher( paper );

	// Create content assessor and run assessments
	const contentAssessor = new ContentAssessor(researcher);
	contentAssessor.assess(paper);
	const contentAnalysisResults = contentAssessor.getValidResults();

	// Create SEO assessor and run assessments
	const seoAssessor = new SeoAssessor(researcher);
	seoAssessor.assess(paper);
	const seoAnalysisResults = seoAssessor.getValidResults();

	// Get Flesch Reading Score
	const fleschReadingScore = getFleschReadingScore(paper, researcher);

	return {
		content: contentAnalysisResults,
		seo: seoAnalysisResults,
		others: [
			{
				text: ' Flesch Reading Score',
				score: fleschReadingScore.score,
			},
		],
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
	const otherMetrics = formatContentResults(results.others);

	return {
		content: contentAnalysisResult,
		seo: seoAnalysisResult,
		others: otherMetrics,
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
