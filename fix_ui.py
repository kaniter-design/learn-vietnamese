import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# FIX 1: Add default bg/border/color to .node-btn
old = """    .node-btn {
      width: 3.5rem; height: 3.5rem;
      border-radius: 9999px;
      z-index: 10;
      position: relative;
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    }"""
new = """    .node-btn {
      width: 3.5rem; height: 3.5rem;
      border-radius: 9999px;
      z-index: 10;
      position: relative;
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      background: var(--bg-surface);
      border: 2px solid rgba(255,255,255,0.08);
      color: var(--text-primary);
    }"""
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 1: Added default bg/border/color to .node-btn')

# FIX 2: Replace Tailwind arbitrary values with CSS classes in JS
old = "const offset = (d % 2 === 0) ? 'translate-x-[20px]' : 'translate-x-[-20px]';"
new = "const offset = (d % 2 === 0) ? 'node-offset-right' : 'node-offset-left';"
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 2: Replaced Tailwind arbitrary values with CSS classes')

# FIX 3: Rename v3 .card to .card-v3 to avoid DaisyUI conflict
old = """    .card {
      background: var(--bg-surface);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 1.25rem;
    }"""
new = """    .card-v3 {
      background: var(--bg-surface);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 1.25rem;
    }"""
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 3: Renamed .card to .card-v3 in CSS')

# Fix cardSlideIn animation
old = ".screen.active .rpg-card, .screen.active .card { animation: cardSlideIn 0.35s ease-out forwards; }"
new = ".screen.active .rpg-card, .screen.active .card-v3 { animation: cardSlideIn 0.35s ease-out forwards; }"
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 3b: cardSlideIn targets .card-v3')

old = ".screen.active .rpg-card:nth-child(2), .screen.active .card:nth-child(2) { animation-delay: 0.05s; }"
new = ".screen.active .rpg-card:nth-child(2), .screen.active .card-v3:nth-child(2) { animation-delay: 0.05s; }"
content = content.replace(old, new)

old = ".screen.active .rpg-card:nth-child(3), .screen.active .card:nth-child(3) { animation-delay: 0.1s; }"
new = ".screen.active .rpg-card:nth-child(3), .screen.active .card-v3:nth-child(3) { animation-delay: 0.1s; }"
content = content.replace(old, new)

# Fix settings HTML
old = '<div class="card mb-3">'
new = '<div class="card-v3 mb-3">'
cnt = content.count(old)
if cnt > 0:
    content = content.replace(old, new, cnt)
    changes.append(f'FIX 3c: Renamed {cnt} .card mb-3')

old = '<div class="card">'
new = '<div class="card-v3">'
cnt = content.count(old) - content.count('<div class="card-v3">')
if cnt > 0:
    content = content.replace(old, new, cnt)
    changes.append(f'FIX 3d: Renamed {cnt} standalone .card')

# FIX 4: Fix .screen.active duplicate - move animation to .screen.active.animate
old = """    .screen.active {
      animation: pageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }"""
new = """    .screen.active.animate {
      animation: pageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }"""
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 4: .screen.active animation moved to .screen.active.animate')

# FIX 6: SRS progress bar - move reload button to its own line
# Find the srs-progress block
old_start = '<div id="srs-progress" class="flex items-center justify-between mt-3 text-xs text-gray-500">'
idx = content.find(old_start)
if idx >= 0:
    end_idx = content.find('</div>', idx + len(old_start))
    if end_idx >= 0:
        end_idx += 6
        old_block = content[idx:end_idx]
        # Extract inner content
        inner_start = len(old_start)
        inner_content = old_block[inner_start:-6]  # Remove outer div tags
        new_block = '''            <div id="srs-progress" class="mt-3 text-xs text-gray-500">
              <div class="flex items-center justify-between gap-2 flex-wrap">''' + inner_content + '''
              </div>
              <div class="flex justify-center mt-2 pt-1 border-t border-white/5">
                <button class="btn-vn text-xs py-1.5 px-4" onclick="loadSRSQueue()">\U0001f504 \u0e42\u0e2b\u0e25\u0e14\u0e43\u0e2b\u0e21\u0e48</button>
              </div>
            </div>'''
        content = content[:idx] + new_block + content[end_idx:]
        changes.append('FIX 6: Moved SRS reload button to separate line')

# FIX 7: Add node-offset CSS classes
insert_after = """      animation: nodeComplete 0.6s ease-out;
    }"""
offset_css = """      animation: nodeComplete 0.6s ease-out;
    }

    /* Node offset classes (replacing Tailwind arbitrary values) */
    .node-offset-right { transform: translateX(20px); }
    .node-offset-left { transform: translateX(-20px); }
    @media (max-width: 480px) {
      .node-offset-right { transform: translateX(12px); }
      .node-offset-left { transform: translateX(-12px); }
    }"""
if insert_after in content:
    content = content.replace(insert_after, offset_css, 1)
    changes.append('FIX 7: Added .node-offset CSS classes')

# FIX 9: Remove data-theme="dark" to avoid DaisyUI dark theme bleeding
old = '<html lang="th" data-theme="dark">'
new = '<html lang="th">'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('FIX 9: Removed data-theme="dark"')

# Write changes
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('=== CHANGES APPLIED ===')
for c in changes:
    print(c)
print(f'\nFile size: {len(content)} chars')
