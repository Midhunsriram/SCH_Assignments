# Using simple text summarization library
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer

def summarize_text(text: str) -> str:
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LsaSummarizer()

    summary_sentences = summarizer(parser.document, 2)

    return " ".join(str(sentence) for sentence in summary_sentences)


# To use openAi
# import os
# from openai import OpenAI

# api_key = os.getenv("OPENAI_API_KEY")
# if not api_key:
#     raise RuntimeError("OPENAI_API_KEY is not set")

# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# def summarize_text(text: str) -> str:
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {
#                 "role": "system",
#                 "content": "Summarize the purchase requisition clearly in 1-2 sentences."
#             },
#             {
#                 "role": "user",
#                 "content": text
#             }
#         ],
#         max_tokens=60,
#         temperature=0.3
#     )

#     return response.choices[0].message.content.strip()
