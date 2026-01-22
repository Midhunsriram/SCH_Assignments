# Using simple text summarization library
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer

def summarize_text(text: str) -> str:
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LsaSummarizer()

    summary_sentences = summarizer(parser.document, 2)

    return " ".join(str(sentence) for sentence in summary_sentences)
