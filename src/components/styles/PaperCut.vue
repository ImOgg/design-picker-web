<template>
    <div
        class="min-h-full bg-[#fdfbf7] p-8 font-sans text-[#4a4a4a] flex justify-center items-center overflow-hidden relative">

        <!-- Abstract Paper Background Elements -->
        <div
            class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffcfd2] rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.1)] z-0">
        </div>
        <div
            class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#b9fbc0] rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.1)] z-0">
        </div>
        <div
            class="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-[#90dbf4] rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.1)] z-0">
        </div>

        <div class="max-w-4xl w-full relative z-10">

            <!-- Header -->
            <header class="text-center mb-12 relative">
                <div
                    class="inline-block bg-[#ff9cee] px-8 py-4 transform -rotate-2 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] z-10 relative">
                    <h1 class="text-5xl md:text-7xl font-bold text-white drop-shadow-md">Paper Cut</h1>
                </div>
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-full h-full bg-[#a18cd1] opacity-0"></div>
                <!-- Placeholder for layering if needed -->
                <p class="text-xl font-medium mt-6 bg-white inline-block px-4 py-1 shadow-sm rotate-1 text-[#666]">
                    Layered, tactile, and crafted.</p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <!-- Info Card -->
                <div
                    class="bg-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] border-2 border-[#f0f0f0] relative group transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.1)]">
                    <div
                        class="absolute -top-4 -left-4 w-12 h-12 bg-[#fbf8cc] rounded-full shadow-sm z-20 flex items-center justify-center text-2xl">
                        ✂️</div>

                    <h2 class="text-3xl font-bold mb-6 text-[#ff6b6b]">The Concept</h2>
                    <p class="text-lg leading-relaxed mb-6 text-gray-600">
                        Paper Cut style mimics the art of paper layering. It uses depth, shadows, and stacking to create
                        a 3D effect without gradients. It feels handmade, organic, and playful.
                    </p>
                    <button
                        class="px-8 py-3 bg-[#98f5e1] text-[#006d5b] font-bold text-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-white">
                        Fold Me
                    </button>
                </div>

                <!-- Form Elements -->
                <div class="bg-white p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.1)] border-2 border-[#f0f0f0] relative">
                    <div class="absolute -top-3 -right-3 w-8 h-8 bg-[#ffcfd2] rounded-full z-10"></div>

                    <h3
                        class="text-2xl font-bold mb-8 text-center text-[#4a4a4a] border-b-2 border-dashed border-gray-200 pb-4">
                        Crafting Form</h3>

                    <div class="space-y-8">

                        <!-- Input -->
                        <div class="space-y-2 relative">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider text-[#888]">Project
                                Name</label>
                            <div class="relative">
                                <input type="text"
                                    class="w-full px-4 py-3 bg-[#f0f0f0] border-none focus:outline-none focus:bg-[#e0e0e0] transition-colors text-[#333] placeholder-gray-400 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]"
                                    placeholder="Origami Crane">
                                <div class="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff9cee]"></div>
                            </div>
                        </div>

                        <!-- Select -->
                        <div class="space-y-2">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider text-[#888]">Paper
                                Type</label>
                            <div class="relative">
                                <select
                                    class="w-full px-4 py-3 bg-white border-2 border-[#eee] shadow-[4px_4px_0px_#eee] appearance-none focus:outline-none focus:border-[#ff9cee] focus:shadow-[4px_4px_0px_#ff9cee] cursor-pointer text-[#333] transition-all">
                                    <option>Washi</option>
                                    <option>Cardstock</option>
                                    <option>Construction</option>
                                </select>
                                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#888]">▼
                                </div>
                            </div>
                        </div>

                        <!-- Radio -->
                        <div class="space-y-3">
                            <label class="ml-1 font-bold text-sm uppercase tracking-wider text-[#888]">Fold
                                Direction</label>
                            <div class="flex gap-4">
                                <label class="cursor-pointer relative">
                                    <input type="radio" name="fold" class="peer sr-only" checked>
                                    <div
                                        class="px-6 py-2 bg-white border-2 border-[#eee] text-[#888] peer-checked:bg-[#a0c4ff] peer-checked:text-white peer-checked:border-[#a0c4ff] peer-checked:shadow-[3px_3px_0px_rgba(0,0,0,0.1)] transition-all font-bold">
                                        Valley
                                    </div>
                                </label>
                                <label class="cursor-pointer relative">
                                    <input type="radio" name="fold" class="peer sr-only">
                                    <div
                                        class="px-6 py-2 bg-white border-2 border-[#eee] text-[#888] peer-checked:bg-[#fdffb6] peer-checked:text-[#555] peer-checked:border-[#fdffb6] peer-checked:shadow-[3px_3px_0px_rgba(0,0,0,0.1)] transition-all font-bold">
                                        Mountain
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Slider -->
                        <div class="space-y-2">
                            <div
                                class="flex justify-between ml-1 font-bold text-sm uppercase tracking-wider text-[#888]">
                                <label>Crease Depth</label>
                                <span>High</span>
                            </div>
                            <input type="range"
                                class="w-full h-3 bg-[#eee] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ffc6ff] [&::-webkit-slider-thumb]:rounded-none [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform">
                        </div>

                        <button
                            class="w-full py-4 mt-4 bg-[#bdb2ff] text-white font-bold text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:bg-[#a094e3]">
                            Finish Creation
                        </button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Additional custom styles if needed, mostly Tailwind */
</style>
