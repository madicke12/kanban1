import re

text = """
ORIGIN      
        1 malwmrllpl lallalwgpd paaafvnqhl cgshlvealy lvcgergffy tpktrreaed
       61 lqvgqvelgg gpgagslqpl alegslqkrg iveqcctsic slyqlenycn
//
"""

sequence = re.sub(r'\d+|ORIGIN|\/|\s', '', text)

files = {
    "preproinsulin-seq-clean.txt": sequence,
    "lsinsulin-seq-clean.txt": sequence[:24],
    "binsulin-seq-clean.txt": sequence[24:54],
    "cinsulin-seq-clean.txt": sequence[54:89],
    "ainsulin-seq-clean.txt": sequence[89:110]
}


for filename, content in files.items():
    with open(filename, "w") as file:
        file.write(content)
    print(f"Saved {filename} with {len(content)} characters.")
