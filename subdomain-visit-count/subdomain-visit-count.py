#leetcode - Subdomain visit count - Medium

class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        lookup = {}
        for domain in cpdomains:
            count_paired = domain.split()
            count = int(count_paired[0])
            whole_domain = count_paired[1]
            lookup[whole_domain] = lookup.get(whole_domain, 0) + count
            i = 0
            while i < len(whole_domain):
                if whole_domain[i] == ".":
                    sub_domain = whole_domain[i+1:]
                    lookup[sub_domain] = lookup.get(sub_domain, 0) + count
                    i += 2
                i += 1
        result = []
        for domain, count in lookup.items():
            pair = " ".join([str(count), domain])
            result.append(pair)
        return result