import string
# from Master the Mainframe:
uss_challenge_text = "lxwpajcdujcrxwb! hxd dwblajvkunm cqn vnbbjpn rw cqn dbb lqjuunwpn!!"


# https://cryptii.com/pipes/caesar-cipher

# frontend will have a select for 1-26 as options for rotation value, while you could rotate 250, or 214568742 times
# it would be pointless as you only have 26 other letters you can scramble to, so we'll restrict options at frontend, but also throw err
# if rotation is > 26 or < 0

# since rotation 26 ends up at the start position, we'll make it so the front-end can only choose [0-25]

# rotate forwards [A: B]
def encode(text, rotation):
    if not isinstance(rotation, (int, str)):
        raise TypeError('rotation must be int or str')
    assert (rotation >= 0) & (rotation <= 26), 'rotation must be in range [0-26]'

    counter = int(rotation)
    encode_codex = {
        'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f', 'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j',
        'j': 'k', 'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p', 'p': 'q', 'q': 'r', 'r': 's',
        's': 't', 't': 'u', 'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z', 'z': 'a',

        'A': 'B', 'B': 'C', 'C': 'D', 'D': 'E', 'E': 'F', 'F': 'G', 'G': 'H', 'H': 'I', 'I': 'J',
        'J': 'K', 'K': 'L', 'L': 'M', 'M': 'N', 'N': 'O', 'O': 'P', 'P': 'Q', 'Q': 'R', 'R': 'S',
        'S': 'T', 'T': 'U', 'U': 'V', 'V': 'W', 'W': 'X', 'X': 'Y', 'Y': 'Z', 'Z': 'A'
    }
    # when rotation = 0, encoded = given text
    encoded = text

    def shift(text_2):
        shifted = ''
        for letter in text_2:
            if letter.isalpha():
                shifted += encode_codex.get(letter)
            else:
                shifted += letter
        return shifted

    for i in range(0, counter):
        encoded = shift(encoded)

    return encoded

# rotate backwards [B: A]
def decode(encoded, rotation):
    # note: assert is less safe than raise err -> you can run py scripts like: python -O myscript.py (optimized tag -> skips assertions)
    if not isinstance(rotation, (int, str)):
        raise TypeError('rotation must be int or str')
    assert (rotation >= 0) & (rotation <= 26), 'rotation must be in range [0-26]'
    counter = int(rotation)
    decode_codex = {
        'a': 'z', 'b': 'a', 'c': 'b', 'd': 'c', 'e': 'd', 'f': 'e', 'g': 'f', 'h': 'g', 'i': 'h',
        'j': 'i', 'k': 'j', 'l': 'k', 'm': 'l', 'n': 'm', 'o': 'n', 'p': 'o', 'q': 'p', 'r': 'q',
        's': 'r', 't': 's', 'u': 't', 'v': 'u', 'w': 'v', 'x': 'w', 'y': 'x', 'z': 'y',

        'A': 'Z', 'B': 'A', 'C': 'B', 'D': 'C', 'E': 'D', 'F': 'E', 'G': 'F', 'H': 'G', 'I': 'H',
        'J': 'I', 'K': 'J', 'L': 'K', 'M': 'L', 'N': 'M', 'O': 'N', 'P': 'O', 'Q': 'P', 'R': 'Q',
        'S': 'R', 'T': 'S', 'U': 'T', 'V': 'U', 'W': 'V', 'X': 'W', 'Y': 'X', 'Z': 'Y'
    }
    decoded = encoded

    def shift(text):
        shifted = ''
        for letter in text:
            if letter.isalpha():
                shifted += decode_codex.get(letter)
            else:
                shifted += letter
        return shifted

    for i in range(0, counter):
        decoded = shift(decoded)

    return decoded

'''
consider writing-out the for-loops when converting to JavaScript for future projects...

by GPT:
-------
avoid looping all together with modulus: (rotations in range[0-26])

def rotate_letter(ch, rotation, upper=False):
    alphabet = string.ascii_uppercase if upper else string.ascii_lowercase
    return alphabet[(alphabet.index(ch) + rotation) % 26]

encoded = ''.join(
    rotate_letter(ch, counter, ch.isupper()) if ch.isalpha() else ch
    for ch in text
)

my own solution previously for CCSA?:
-------------------------------------
it can be solved without looping by just having an array(list) of 2x the alphabet length and then 
for encode: move forward like: upper.findFirstIndexOf(LETTER) or lower.findFirstIndexOf(letter)
for decode: move backward like: upper.findLastIndexOf(LETTER) or lower.findLastIndexOf(letter)

therefor: have 2 alphabet lists each 2x normal length, 1 for upper and 1 for lower
then shift(for example: encode) will be like:
newtext = ''
for letter in text:
   ## if-else for isAlpha() & upper or lower
   newtext += upper[upper.firstIndexOf(letter) + rotation]

return newtext

storage: 2x alphabetUpper + 2x alphabetLower, but avoid loops, so T(n) = O(n) instead of T(n) = O(n²)

'''

print(encode("lxwpajcdujcrxwb! hxd dwblajvkunm cqn vnbbjpn rw cqn dbb lqjuunwpn!!", 17))
print(decode("congratulations! you unscrambled the message in the uss challenge!!", 17))